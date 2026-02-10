(function () {
  'use strict';

  // Debug stub (logging removed)
  function dbg() {}

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // ===== Color helpers =====
  function hue2rgb(p, q, t) {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }
  function hsl(h, s, l) {
    if (s === 0) return [l, l, l];
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q;
    return [hue2rgb(p, q, h + 1 / 3), hue2rgb(p, q, h), hue2rgb(p, q, h - 1 / 3)];
  }

  // ===== Three.js Scene =====
  var FOV = 50, CAM_Z = 3;
  var halfH = Math.tan(FOV * Math.PI / 360) * CAM_Z; // visible half-height at z=0

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(FOV, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = CAM_Z;

  var renderer = new THREE.WebGLRenderer({ antialias: !isMobile });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x030308);
  document.getElementById('scene-container').appendChild(renderer.domElement);

  // ===== Glow texture (procedural soft circle) =====
  var gc = document.createElement('canvas');
  gc.width = 64; gc.height = 64;
  var gctx = gc.getContext('2d');
  var grad = gctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.12, 'rgba(255,255,255,0.75)');
  grad.addColorStop(0.4, 'rgba(255,255,255,0.18)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  gctx.fillStyle = grad;
  gctx.fillRect(0, 0, 64, 64);
  var glowTex = new THREE.CanvasTexture(gc);

  // ===== Coordinate mapping (landmark → 3D world) =====
  var camAspect = 4 / 3; // updated once video metadata loads
  var mapSX = 1, mapSY = 1;

  function updateMapping() {
    var sa = window.innerWidth / window.innerHeight;
    if (sa > camAspect) {
      // Screen wider than camera → fit to height
      mapSY = halfH * 2;
      mapSX = mapSY * camAspect;
    } else {
      // Screen taller than camera → fit to width
      mapSX = halfH * sa * 2;
      mapSY = mapSX / camAspect;
    }
  }
  updateMapping();

  function lm3d(lm, out, i) {
    out[i * 3]     = (lm.x - 0.5) * mapSX;      // no flip — selfieMode already mirrors
    out[i * 3 + 1] = -(lm.y - 0.5) * mapSY;     // flip Y (screen Y is top-down)
    out[i * 3 + 2] = -(lm.z || 0) * mapSY * 0.3; // subtle depth
  }

  // ===== Face Particles (478 landmarks) =====
  var MAX_FACE = 478;
  var fTgt = new Float32Array(MAX_FACE * 3);   // target positions from landmarks
  var fPos = new Float32Array(MAX_FACE * 3);   // current (lerped) positions
  var fCol = new Float32Array(MAX_FACE * 3);   // vertex colors
  var fHas = false;

  // Initialize scattered + assign warm gradient colors
  for (var i = 0; i < MAX_FACE; i++) {
    fPos[i * 3]     = (Math.random() - 0.5) * 5;
    fPos[i * 3 + 1] = (Math.random() - 0.5) * 4;
    fPos[i * 3 + 2] = (Math.random() - 0.5) * 2;
    // Warm: pink(0.93) → red(0.0) → orange(0.07)
    var t = i / MAX_FACE;
    var c = hsl(0.95 + t * 0.1, 0.9, 0.55);
    fCol[i * 3] = c[0]; fCol[i * 3 + 1] = c[1]; fCol[i * 3 + 2] = c[2];
  }

  var fGeo = new THREE.BufferGeometry();
  fGeo.setAttribute('position', new THREE.BufferAttribute(fPos, 3));
  fGeo.setAttribute('color', new THREE.BufferAttribute(fCol, 3));

  var fMat = new THREE.PointsMaterial({
    size: isMobile ? 0.045 : 0.032,
    map: glowTex,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    transparent: true,
    depthWrite: false,
    sizeAttenuation: true
  });
  scene.add(new THREE.Points(fGeo, fMat));

  // ===== Face mesh lines (tesselation wireframe) =====
  var fLineGeo = null;
  if (typeof FACEMESH_TESSELATION !== 'undefined') {
    fLineGeo = new THREE.BufferGeometry();
    fLineGeo.setAttribute('position', fGeo.getAttribute('position')); // shared buffer
    var idx = [];
    for (var ci = 0; ci < FACEMESH_TESSELATION.length; ci++) {
      idx.push(FACEMESH_TESSELATION[ci][0], FACEMESH_TESSELATION[ci][1]);
    }
    fLineGeo.setIndex(idx);
    scene.add(new THREE.LineSegments(fLineGeo, new THREE.LineBasicMaterial({
      color: 0xff4422,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.06,
      depthWrite: false
    })));
    dbg('Face lines: ' + FACEMESH_TESSELATION.length + ' edges');
  }

  // ===== Hand Particles (21 per hand × 2 hands) =====
  var MAX_HAND = 21;
  var hands = [];
  for (var h = 0; h < 2; h++) {
    var hObj = {
      tgt: new Float32Array(MAX_HAND * 3),
      pos: new Float32Array(MAX_HAND * 3),
      col: new Float32Array(MAX_HAND * 3),
      has: false, geo: null
    };
    for (var j = 0; j < MAX_HAND; j++) {
      hObj.pos[j * 3]     = (Math.random() - 0.5) * 4 + (h === 0 ? -1 : 1);
      hObj.pos[j * 3 + 1] = (Math.random() - 0.5) * 3;
      hObj.pos[j * 3 + 2] = (Math.random() - 0.5) * 2;
      // Cool: teal(0.47) → cyan(0.52) → blue(0.62)
      var ht = j / MAX_HAND;
      var hc = hsl(0.47 + ht * 0.18, 0.85, 0.5 + ht * 0.1);
      hObj.col[j * 3] = hc[0]; hObj.col[j * 3 + 1] = hc[1]; hObj.col[j * 3 + 2] = hc[2];
    }
    hObj.geo = new THREE.BufferGeometry();
    hObj.geo.setAttribute('position', new THREE.BufferAttribute(hObj.pos, 3));
    hObj.geo.setAttribute('color', new THREE.BufferAttribute(hObj.col, 3));
    scene.add(new THREE.Points(hObj.geo, new THREE.PointsMaterial({
      size: isMobile ? 0.06 : 0.045,
      map: glowTex,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
      sizeAttenuation: true
    })));

    // Hand connection lines
    if (typeof HAND_CONNECTIONS !== 'undefined') {
      var hLineGeo = new THREE.BufferGeometry();
      hLineGeo.setAttribute('position', hObj.geo.getAttribute('position'));
      var hIdx = [];
      for (var hci = 0; hci < HAND_CONNECTIONS.length; hci++) {
        hIdx.push(HAND_CONNECTIONS[hci][0], HAND_CONNECTIONS[hci][1]);
      }
      hLineGeo.setIndex(hIdx);
      scene.add(new THREE.LineSegments(hLineGeo, new THREE.LineBasicMaterial({
        color: 0x2288cc,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.15,
        depthWrite: false
      })));
      hObj.lineGeo = hLineGeo;
    }

    hands.push(hObj);
  }

  // ===== Ambient background particles =====
  var AMB_N = isMobile ? 120 : 350;
  var ambPos = new Float32Array(AMB_N * 3);
  var ambCol = new Float32Array(AMB_N * 3);
  var ambSeed = new Float32Array(AMB_N);
  for (var ai = 0; ai < AMB_N; ai++) {
    ambPos[ai * 3]     = (Math.random() - 0.5) * 8;
    ambPos[ai * 3 + 1] = (Math.random() - 0.5) * 6;
    ambPos[ai * 3 + 2] = -1 - Math.random() * 3;
    ambSeed[ai] = Math.random() * 100;
    var warm = Math.random() > 0.5;
    ambCol[ai * 3]     = warm ? 0.15 + Math.random() * 0.1 : 0.05;
    ambCol[ai * 3 + 1] = warm ? 0.06 : 0.08 + Math.random() * 0.08;
    ambCol[ai * 3 + 2] = warm ? 0.04 : 0.12 + Math.random() * 0.1;
  }
  var ambGeo = new THREE.BufferGeometry();
  ambGeo.setAttribute('position', new THREE.BufferAttribute(ambPos, 3));
  ambGeo.setAttribute('color', new THREE.BufferAttribute(ambCol, 3));
  scene.add(new THREE.Points(ambGeo, new THREE.PointsMaterial({
    size: 0.02,
    map: glowTex,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    transparent: true,
    opacity: 0.6,
    depthWrite: false,
    sizeAttenuation: true
  })));

  // ===== Mouth detection state =====
  var mouthOpen = false;
  var mouthCenter3D = new THREE.Vector3();
  var MOUTH_OPEN_THRESHOLD = 0.02; // vertical gap between lips (normalized 0-1)
  var SUCK_RADIUS = 2.0;   // how far mouth suction reaches
  var SUCK_SPEED = 2.0;    // how fast capybaras get pulled in (units/sec)
  var SWALLOW_DIST = 0.1;  // distance at which capybara is fully eaten
  var SUCK_RANGE_XY = 0.95; // 2D (screen) distance between mouth and capybara to start sucking

  // ===== Hand slap state =====
  var SLAP_HIT_RANGE = 1.0;   // how close palm must be to capybara (XY) to slap it
  var SLAP_SPEED_THRESHOLD = 0.4; // min palm speed (units/sec) to count as a slap
  var SLAP_FLY_SPEED = 3.0;  // how fast the capybara flies away after slap
  var SLAP_FLY_DURATION = 60; // frames the capybara flies before dying
  // Track palm center position and velocity for each hand
  var palmPos = [new THREE.Vector3(), new THREE.Vector3()];
  var palmPrev = [new THREE.Vector3(), new THREE.Vector3()];
  var palmVel = [new THREE.Vector3(), new THREE.Vector3()];
  var palmHasData = [false, false];

  // ===== Score =====
  var score = 0;
  var scoreEl = document.getElementById('score');

  function showEatPopup(worldPos) {
    score++;
    scoreEl.textContent = score;
    // Project 3D position to screen
    var v = worldPos.clone();
    v.project(camera);
    var sx = (v.x * 0.5 + 0.5) * window.innerWidth;
    var sy = (-v.y * 0.5 + 0.5) * window.innerHeight;
    // Create floating "+N" element
    var el = document.createElement('div');
    el.className = 'eat-popup';
    el.textContent = '+' + score;
    el.style.left = sx + 'px';
    el.style.top = sy + 'px';
    document.body.appendChild(el);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 1300);
  }

  // ===== Capybara overlay (look toward the face) =====
  var faceCenterTarget = new THREE.Vector3(0, 0, 0);
  var faceCenterSmooth = new THREE.Vector3(0, 0, 0);
  var capys = [];
  var capyT = 0;

  // Taper head — r128 version of the r79 geo.vertices modifications.
  // Modifies the BufferGeometry position attribute to match the original shape.
  function taperHead(geo) {
    var pos = geo.getAttribute('position');
    var a = pos.array;
    for (var i = 0; i < pos.count; i++) {
      var px = a[i * 3], py = a[i * 3 + 1], pz = a[i * 3 + 2];
      // Original: vertices[0,2] (x<0, z>0) → x -= .2; vertices[5,7] (x>0, z<0) → x += .2
      // Y pushed toward center on same corners
      if (px < 0 && pz > 0) {
        a[i * 3]     -= 0.2;
        a[i * 3 + 1] += (py > 0 ? -0.2 : 0.2);
      } else if (px > 0 && pz < 0) {
        a[i * 3]     += 0.2;
        a[i * 3 + 1] += (py > 0 ? -0.2 : 0.2);
      }
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
  }

  // Create a text sprite using a canvas texture
  function makeTextSprite(text) {
    var canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 64;
    var ctx = canvas.getContext('2d');
    ctx.font = 'bold 36px Courier New';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(255,100,50,0.8)';
    ctx.shadowBlur = 8;
    ctx.fillText(text, 64, 32);
    var tex = new THREE.CanvasTexture(canvas);
    var mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthTest: false
    });
    var sprite = new THREE.Sprite(mat);
    sprite.scale.set(1.2, 0.6, 1);
    return sprite;
  }

  // Exact replica of the original capy() constructor, adapted for r128.
  // Structure: this.obj (Group) → this.head (Mesh) → eyes, ears as children.
  function Capy(x, y, z) {
    this.obj = new THREE.Group();
    this.obj.position.set(x, y, z);
    this.eyes = [];
    this.ears = [];

    var furMaterial = new THREE.MeshLambertMaterial({ color: 0xd26844 });
    var eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x221133 }); // Basic so eyes are visible in dark scene

    // Head — BoxGeometry(1, 1, 1.5) with vertex taper, then uniform scale
    var geo = new THREE.BoxGeometry(1, 1, 1.5);
    taperHead(geo);
    this.head = new THREE.Mesh(geo, furMaterial);
    this.obj.add(this.head);

    // Eyes — SphereGeometry(.1) at (±.45, 0, -.4)
    geo = new THREE.SphereGeometry(0.1, 5, 5);
    var eye = new THREE.Mesh(geo, eyeMaterial);
    eye.position.set(-0.45, 0, -0.4);
    this.head.add(eye);
    this.eyes.push(eye);
    eye = eye.clone();
    eye.position.set(0.45, 0, -0.4);
    this.head.add(eye);
    this.eyes.push(eye);

    // Ears — BoxGeometry(.2, .4, .2) at (±.3, .5, -.5)
    geo = new THREE.BoxGeometry(0.2, 0.4, 0.2);
    var ear = new THREE.Mesh(geo, furMaterial);
    ear.position.set(-0.3, 0.5, -0.5);
    ear.rotation.set(-Math.PI / 6, 0, 0);
    this.ears.push(ear);
    this.head.add(ear);
    ear = ear.clone();
    ear.position.set(0.3, 0.5, -0.5);
    this.ears.push(ear);
    this.head.add(ear);

    // "Capy" label floating above the head
    var labelSprite = makeTextSprite('Capy');
    labelSprite.position.set(0, 1.0, 0);
    this.head.add(labelSprite);
    this.label = labelSprite;

    // Scale the whole group down to fit our scene
    var sc = isMobile ? 0.28 : 0.24;
    this.obj.scale.set(sc, sc, sc);

    scene.add(this.obj);

    this.earFlick = 0;
    this.ear = 0;
    this.blink = 0;
    this.blinkTime = Math.floor(Math.random() * 20) + 10;
    this.baseX = x;
    this.baseY = y;
    this.seed = Math.random() * 100;
    // States: 'alive', 'sucking', 'slapped', 'dead'
    this.state = 'alive';
    this.respawnTimer = 0;
    this.origScale = sc;
    this.suckProgress = 0;
    this.slapDir = new THREE.Vector3();
    this.slapTimer = 0;
  }

  Capy.prototype.startSuck = function () {
    if (this.state !== 'alive') return;
    this.state = 'sucking';
    this.suckProgress = 0;
    dbg('Capybara sucked in!');
  };

  Capy.prototype.releaseSuck = function () {
    // Mouth closed while being sucked — release back to normal
    if (this.state !== 'sucking') return;
    this.state = 'alive';
    this.suckProgress = 0;
    var s = this.origScale;
    this.obj.scale.set(s, s, s);
  };

  Capy.prototype.eat = function () {
    this.state = 'dead';
    this.obj.visible = false;
    showEatPopup(this.obj.position);
    checkAllEaten();
  };

  Capy.prototype.slap = function (direction) {
    if (this.state !== 'alive') return;
    this.state = 'slapped';
    this.slapDir.copy(direction).normalize();
    this.slapTimer = SLAP_FLY_DURATION;
    showEatPopup(this.obj.position);
    dbg('Capybara slapped!');
  };

  function checkAllEaten() {
    for (var i = 0; i < capys.length; i++) {
      if (capys[i].state !== 'dead') return;
    }
    // All eaten — show "I love you"
    showLoveMessage();
  }

  var loveShown = false;
  var fireworks = []; // active firework particle systems

  var loveEl = null;
  var loveEatable = false;
  var loveEaten = false;

  function showLoveMessage() {
    if (loveShown) return;
    loveShown = true;

    // Centered "I love you" text
    loveEl = document.createElement('div');
    loveEl.id = 'love-msg';
    loveEl.textContent = 'I love you';
    loveEl.style.cssText = 'position:fixed;inset:0;display:flex;align-items:center;justify-content:center;' +
      'font-size:' + (isMobile ? '48px' : '72px') + ';color:#ff4488;z-index:200;pointer-events:none;' +
      'text-shadow:0 0 30px rgba(255,70,140,0.8),0 0 60px rgba(255,70,140,0.4),0 0 100px rgba(255,70,140,0.2);' +
      'animation:loveFade 4s ease-in-out forwards;font-family:\"Courier New\",monospace;letter-spacing:6px;' +
      'transition:transform 0.8s ease-in, opacity 0.8s ease-in;';
    document.body.appendChild(loveEl);

    // Launch fireworks repeatedly
    launchFirework();
    var fwInterval = setInterval(function () {
      if (loveEaten) { clearInterval(fwInterval); return; }
      launchFirework();
    }, 600);
    setTimeout(function () { clearInterval(fwInterval); }, 8000);

    // After 5 seconds, allow the mouth to eat the text
    setTimeout(function () { loveEatable = true; }, 5000);
  }

  function eatLoveMessage() {
    if (!loveEl || loveEaten) return;
    loveEaten = true;
    // Suck the text toward the mouth position on screen
    var mv = mouthCenter3D.clone();
    mv.project(camera);
    var mx = (mv.x * 0.5 + 0.5) * window.innerWidth;
    var my = (-mv.y * 0.5 + 0.5) * window.innerHeight;
    loveEl.style.transform = 'translate(' + (mx - window.innerWidth / 2) + 'px,' + (my - window.innerHeight / 2) + 'px) scale(0)';
    loveEl.style.opacity = '0';
    setTimeout(function () {
      if (loveEl && loveEl.parentNode) loveEl.parentNode.removeChild(loveEl);
      // Final popup
      showEatPopup(mouthCenter3D);
    }, 900);
  }

  // ===== Firework system =====
  var FW_COUNT = isMobile ? 60 : 120; // particles per firework

  function launchFirework() {
    // Random origin position
    var cx = (Math.random() - 0.5) * 3;
    var cy = (Math.random() - 0.5) * 2;
    var cz = (Math.random() - 0.5) * 1.5;

    // Random color hue
    var hue = Math.random();
    var col = hsl(hue, 1, 0.6);

    var positions = new Float32Array(FW_COUNT * 3);
    var velocities = new Float32Array(FW_COUNT * 3);
    var colors = new Float32Array(FW_COUNT * 3);

    for (var i = 0; i < FW_COUNT; i++) {
      positions[i * 3]     = cx;
      positions[i * 3 + 1] = cy;
      positions[i * 3 + 2] = cz;
      // Explode in random sphere direction
      var theta = Math.random() * Math.PI * 2;
      var phi = Math.acos(2 * Math.random() - 1);
      var speed = 1.5 + Math.random() * 2;
      velocities[i * 3]     = Math.sin(phi) * Math.cos(theta) * speed;
      velocities[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * speed;
      velocities[i * 3 + 2] = Math.cos(phi) * speed;
      // Slight color variation per particle
      var h2 = hue + (Math.random() - 0.5) * 0.1;
      var c2 = hsl(h2, 0.9, 0.5 + Math.random() * 0.3);
      colors[i * 3] = c2[0]; colors[i * 3 + 1] = c2[1]; colors[i * 3 + 2] = c2[2];
    }

    var geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    var mat = new THREE.PointsMaterial({
      size: isMobile ? 0.06 : 0.045,
      map: glowTex,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
      sizeAttenuation: true,
      opacity: 1
    });

    var points = new THREE.Points(geo, mat);
    scene.add(points);

    fireworks.push({
      points: points,
      geo: geo,
      mat: mat,
      vel: velocities,
      life: 1.0 // 1 → 0
    });
  }

  // Called every frame from animate()
  function updateFireworks(dt) {
    for (var i = fireworks.length - 1; i >= 0; i--) {
      var fw = fireworks[i];
      fw.life -= dt * 0.6; // fade over ~1.7 seconds
      if (fw.life <= 0) {
        scene.remove(fw.points);
        fw.geo.dispose();
        fw.mat.dispose();
        fireworks.splice(i, 1);
        continue;
      }
      fw.mat.opacity = fw.life;
      var pos = fw.geo.attributes.position.array;
      for (var j = 0; j < FW_COUNT; j++) {
        pos[j * 3]     += fw.vel[j * 3] * dt;
        pos[j * 3 + 1] += fw.vel[j * 3 + 1] * dt - dt * 0.8; // gravity
        pos[j * 3 + 2] += fw.vel[j * 3 + 2] * dt;
        // Slow down (drag)
        fw.vel[j * 3]     *= (1 - dt * 1.5);
        fw.vel[j * 3 + 1] *= (1 - dt * 1.5);
        fw.vel[j * 3 + 2] *= (1 - dt * 1.5);
      }
      fw.geo.attributes.position.needsUpdate = true;
    }
  }

  Capy.prototype.update = function (target, t) {
    // In r128, lookAt for Meshes points +z at target. Capybara face is on -z side.
    // rotateY(PI) flips it so the face (eyes/ears) points toward the target.
    if (target) {
      this.head.lookAt(target);
      this.head.rotateY(Math.PI);
    }

    // Gentle floating bob
    this.obj.position.x = this.baseX + Math.sin(t * 0.4 + this.seed) * 0.08;
    this.obj.position.y = this.baseY + Math.cos(t * 0.35 + this.seed * 1.3) * 0.06;

    // Ear flick — exact original logic
    if (this.earFlick === 0) {
      this.ears[this.ear].rotation.set(-Math.PI / 6, this.ears[this.ear].rotation.y, this.ears[this.ear].rotation.z);
      if (Math.random() < 0.005) {
        this.earFlick = 5;
        this.ear = Math.floor(Math.random() * 2);
      }
    } else {
      this.ears[this.ear].rotation.set(-Math.PI / 6 - Math.tan(Math.sin(t)) / 5, this.ears[this.ear].rotation.y, this.ears[this.ear].rotation.z);
      this.earFlick -= 1;
    }

    // Blink — exact original logic
    if (this.blink === 0) {
      this.eyes[0].scale.y = 1;
      if (Math.random() < 0.005) {
        this.blink = this.blinkTime;
      }
    } else {
      if (this.blink <= this.blinkTime / 2) {
        this.eyes[0].scale.y += 1 / this.blinkTime;
      } else {
        this.eyes[0].scale.y -= 1 / this.blinkTime;
      }
      this.blink -= 1;
    }
    this.eyes[1].scale.y = this.eyes[0].scale.y;
  };

  // Place 5 capybaras behind the face, scattered around
  (function () {
    var spots = [
      { x: -0.9, y:  0.5 },
      { x:  0.8, y:  0.6 },
      { x: -0.6, y: -0.5 },
      { x:  0.7, y: -0.4 },
      { x:  0.0, y:  0.8 }
    ];
    for (var i = 0; i < spots.length; i++) {
      var z = -0.4 - Math.random() * 0.5;
      var cap = new Capy(spots[i].x, spots[i].y, z);
      capys.push(cap);
    }
    dbg('Capybaras: ' + capys.length);
  })();

  // Lights for capybara meshes (particles use additive blending, don't need lights)
  scene.add(new THREE.AmbientLight(0x667788, 0.6));
  var dirLight = new THREE.DirectionalLight(0xffddaa, 0.8);
  dirLight.position.set(2, 3, 4);
  scene.add(dirLight);

  // ===== Animation loop =====
  var clock = new THREE.Clock();
  var LERP_SPEED = 14; // higher = snappier convergence
  var DRIFT_SPEED = 4; // how fast particles drift when no tracking

  function animate() {
    requestAnimationFrame(animate);
    var dt = Math.min(clock.getDelta(), 0.05);
    var el = clock.getElapsedTime();
    var lf = 1 - Math.exp(-LERP_SPEED * dt);
    capyT += dt * 3;

    // --- Face particles ---
    for (var fi = 0; fi < MAX_FACE * 3; fi++) {
      var fn = Math.sin(el * 1.7 + fi * 0.37) * 0.0015 +
               Math.cos(el * 2.3 + fi * 0.53) * 0.001;
      if (fHas) {
        fPos[fi] += (fTgt[fi] - fPos[fi]) * lf + fn;
      } else {
        fPos[fi] += fn * DRIFT_SPEED;
      }
    }
    fGeo.attributes.position.needsUpdate = true;

    // --- Hand particles ---
    for (var hi = 0; hi < 2; hi++) {
      var hd = hands[hi];
      for (var hj = 0; hj < MAX_HAND * 3; hj++) {
        var hn = Math.sin(el * 1.9 + hj * 0.41 + hi * 99) * 0.002 +
                 Math.cos(el * 2.7 + hj * 0.61 + hi * 77) * 0.0015;
        if (hd.has) {
          hd.pos[hj] += (hd.tgt[hj] - hd.pos[hj]) * lf + hn;
        } else {
          hd.pos[hj] += hn * DRIFT_SPEED;
        }
      }
      hd.geo.attributes.position.needsUpdate = true;
    }

    // --- Ambient drift ---
    for (var bi = 0; bi < AMB_N; bi++) {
      var s = ambSeed[bi];
      ambPos[bi * 3]     += Math.sin(el * 0.25 + s) * 0.0008;
      ambPos[bi * 3 + 1] += Math.cos(el * 0.18 + s * 1.3) * 0.0006;
      // Soft wrap
      if (ambPos[bi * 3] > 4) ambPos[bi * 3] = -4;
      if (ambPos[bi * 3] < -4) ambPos[bi * 3] = 4;
      if (ambPos[bi * 3 + 1] > 3) ambPos[bi * 3 + 1] = -3;
      if (ambPos[bi * 3 + 1] < -3) ambPos[bi * 3 + 1] = 3;
    }
    ambGeo.attributes.position.needsUpdate = true;

    // --- Capybaras: smooth the look-at target, suction, eating ---
    faceCenterSmooth.lerp(faceCenterTarget, Math.min(lf * 0.5, 1));

    // First pass: update sucking/dead capybaras
    var anySucking = false;
    for (var ci = 0; ci < capys.length; ci++) {
      var cap = capys[ci];

      if (cap.state === 'dead') {
        continue;
      }

      // Slapped — fly away, shrink, then die
      if (cap.state === 'slapped') {
        cap.slapTimer--;
        cap.obj.position.add(cap.slapDir.clone().multiplyScalar(SLAP_FLY_SPEED * dt));
        // Spin while flying
        cap.head.rotation.z += dt * 12;
        // Shrink as it flies
        var t = 1 - cap.slapTimer / SLAP_FLY_DURATION;
        var shrink = cap.origScale * (1 - t * 0.9);
        cap.obj.scale.set(shrink, shrink, shrink);
        if (cap.slapTimer <= 0) {
          cap.state = 'dead';
          cap.obj.visible = false;
          checkAllEaten();
        }
        continue;
      }

      if (cap.state === 'sucking') {
        anySucking = true;
        if (!mouthOpen) {
          cap.releaseSuck();
        } else {
          // Pull toward mouth center
          var dir = mouthCenter3D.clone().sub(cap.obj.position);
          var dist = dir.length();
          if (dist < SWALLOW_DIST) {
            cap.eat();
            continue;
          }
          dir.normalize();
          var pullSpeed = SUCK_SPEED * dt * (1 + cap.suckProgress * 2);
          cap.obj.position.add(dir.multiplyScalar(pullSpeed));
          cap.baseX = cap.obj.position.x;
          cap.baseY = cap.obj.position.y;

          // Shrink as it approaches the mouth
          cap.suckProgress = Math.min(cap.suckProgress + dt * 1.5, 1);
          var shrink = cap.origScale * (1 - cap.suckProgress * 0.8);
          cap.obj.scale.set(shrink, shrink, shrink);

          // Face-first into the mouth
          cap.head.lookAt(mouthCenter3D);
          cap.head.rotateY(Math.PI);
        }
        continue;
      }

      // Alive — normal update
      cap.update(faceCenterSmooth, capyT);
    }

    // Second pass: suck the closest capybara whose X/Y is near the mouth
    if (mouthOpen && !anySucking) {
      var closest = null;
      var closestDist = Infinity;
      for (var cj = 0; cj < capys.length; cj++) {
        if (capys[cj].state !== 'alive') continue;
        var cp = capys[cj].obj.position;
        // 2D distance (X and Y only) — ignores depth so it works like screen proximity
        var dx = cp.x - mouthCenter3D.x;
        var dy = cp.y - mouthCenter3D.y;
        var d2d = Math.sqrt(dx * dx + dy * dy);
        if (d2d < closestDist) {
          closestDist = d2d;
          closest = capys[cj];
        }
      }
      if (closest && closestDist < SUCK_RANGE_XY) {
        closest.startSuck();
      }
    }

    // Third pass: hand slap detection — one capybara per slap
    for (var ph = 0; ph < 2; ph++) {
      if (!palmHasData[ph]) continue;
      var speed = palmVel[ph].length();
      if (speed < SLAP_SPEED_THRESHOLD) continue;
      // Hand is moving fast — check if it's near any alive capybara
      var slapTarget = null;
      var slapDist = Infinity;
      for (var sk = 0; sk < capys.length; sk++) {
        if (capys[sk].state !== 'alive') continue;
        var sp = capys[sk].obj.position;
        var sdx = sp.x - palmPos[ph].x;
        var sdy = sp.y - palmPos[ph].y;
        var sd = Math.sqrt(sdx * sdx + sdy * sdy);
        if (sd < slapDist) {
          slapDist = sd;
          slapTarget = capys[sk];
        }
      }
      if (slapTarget && slapDist < SLAP_HIT_RANGE) {
        slapTarget.slap(palmVel[ph]); // fly in the direction of the slap
        palmHasData[ph] = false; // consume the slap, one per swing
        break;
      }
    }

    // --- Eat "I love you" text when mouth opens after 5s ---
    if (loveEatable && !loveEaten && mouthOpen) {
      eatLoveMessage();
    }

    // --- Fireworks ---
    updateFireworks(dt);

    renderer.render(scene, camera);
  }
  animate();

  // ===== Resize =====
  window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    updateMapping();
  });

  // ===== MediaPipe: Face Mesh =====
  var videoEl = document.getElementById('input-video');
  videoEl.setAttribute('playsinline', '');
  videoEl.muted = true;

  var FM = null;
  if (typeof FaceMesh !== 'undefined') {
    FM = new FaceMesh({
      locateFile: function (f) { return 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/' + f; }
    });
    FM.setOptions({
      selfieMode: true,
      maxNumFaces: 1,
      refineLandmarks: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });
    FM.onResults(function (r) {
      document.body.classList.add('loaded');
      if (r.multiFaceLandmarks && r.multiFaceLandmarks.length > 0) {
        fHas = true;
        var lm = r.multiFaceLandmarks[0];
        for (var i = 0; i < Math.min(lm.length, MAX_FACE); i++) {
          lm3d(lm[i], fTgt, i);
          // Dynamic warm color based on face Y position
          var vy = lm[i].y; // 0 = top, 1 = bottom
          var c = hsl(0.94 + vy * 0.1, 0.88, 0.48 + vy * 0.18);
          fCol[i * 3] = c[0]; fCol[i * 3 + 1] = c[1]; fCol[i * 3 + 2] = c[2];
        }
        fGeo.attributes.color.needsUpdate = true;

        // Update capybara look-at target (nose tip = landmark 1)
        var nose = lm[1];
        faceCenterTarget.set(
          (nose.x - 0.5) * mapSX,
          -(nose.y - 0.5) * mapSY,
          -(nose.z || 0) * mapSY * 0.3
        );

        // Mouth open detection: landmarks 13 (upper inner lip) and 14 (lower inner lip)
        // Mouth opens vertically, so use the Y gap as the primary signal
        var upperLip = lm[13];
        var lowerLip = lm[14];
        var mouthGap = Math.abs(lowerLip.y - upperLip.y); // vertical gap only
        var wasOpen = mouthOpen;
        mouthOpen = mouthGap > MOUTH_OPEN_THRESHOLD;

        // Debug: show mouth state
        if (mouthOpen && !wasOpen) dbg('MOUTH OPEN (gap=' + mouthGap.toFixed(3) + ')');
        if (!mouthOpen && wasOpen) dbg('mouth closed');

        // Visual indicator: score turns green when mouth is open
        scoreEl.style.color = mouthOpen ? '#44ff88' : '#ff8844';

        // Mouth center in 3D (midpoint of upper and lower lip)
        var mx = (upperLip.x + lowerLip.x) / 2;
        var my = (upperLip.y + lowerLip.y) / 2;
        var mz = ((upperLip.z || 0) + (lowerLip.z || 0)) / 2;
        mouthCenter3D.set(
          (mx - 0.5) * mapSX,
          -(my - 0.5) * mapSY,
          -(mz) * mapSY * 0.3
        );

      } else {
        fHas = false;
        mouthOpen = false;
        scoreEl.style.color = '#ff8844';
      }
    });
    dbg('FaceMesh ready');
  } else {
    dbg('FaceMesh not loaded');
  }

  // ===== MediaPipe: Hands =====
  var HM = null;
  if (typeof Hands !== 'undefined') {
    HM = new Hands({
      locateFile: function (f) { return 'https://cdn.jsdelivr.net/npm/@mediapipe/hands/' + f; }
    });
    HM.setOptions({
      selfieMode: true,
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });
    HM.onResults(function (r) {
      for (var hi = 0; hi < 2; hi++) {
        if (r.multiHandLandmarks && r.multiHandLandmarks[hi]) {
          hands[hi].has = true;
          var lm = r.multiHandLandmarks[hi];
          for (var j = 0; j < Math.min(lm.length, MAX_HAND); j++) {
            lm3d(lm[j], hands[hi].tgt, j);
          }
          // Palm center = landmark 0 (wrist) — good proxy for hand position
          palmPrev[hi].copy(palmPos[hi]);
          palmPos[hi].set(
            (lm[0].x - 0.5) * mapSX,
            -(lm[0].y - 0.5) * mapSY,
            -(lm[0].z || 0) * mapSY * 0.3
          );
          if (palmHasData[hi]) {
            palmVel[hi].copy(palmPos[hi]).sub(palmPrev[hi]).multiplyScalar(30); // ~30fps estimate
          }
          palmHasData[hi] = true;
        } else {
          hands[hi].has = false;
          palmHasData[hi] = false;
        }
      }
    });
    dbg('Hands ready');
  } else {
    dbg('Hands not loaded (optional)');
  }

  // ===== Camera + frame loop =====
  function showCamErr(msg) {
    dbg('CAM ERR: ' + msg);
    document.body.classList.add('loaded');
  }

  // Auto-dismiss loading after 12s
  setTimeout(function () { document.body.classList.add('loaded'); }, 12000);

  function startCamera() {
    if (!FM && !HM) {
      document.body.classList.add('loaded');
      dbg('No models loaded — nothing to do');
      return;
    }

    navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } },
      audio: false
    }).then(function (stream) {
      dbg('Camera stream acquired');
      videoEl.srcObject = stream;
      videoEl.onloadedmetadata = function () {
        camAspect = (videoEl.videoWidth || 640) / (videoEl.videoHeight || 480);
        updateMapping();
        dbg('Video: ' + videoEl.videoWidth + 'x' + videoEl.videoHeight);

        videoEl.play().then(function () {
          dbg('Playback started, entering send loop');
          sendLoop();
        }).catch(function (e) {
          dbg('Autoplay blocked, waiting for tap');
          document.body.classList.add('loaded');
          document.body.addEventListener('touchstart', function once() {
            document.body.removeEventListener('touchstart', once);
            videoEl.play().then(sendLoop);
          }, { once: true });
        });
      };
    }).catch(function (e) { showCamErr(e.message || 'Unknown'); });
  }

  var fc = 0;
  function sendLoop() {
    if (videoEl.readyState < 2) { requestAnimationFrame(sendLoop); return; }
    fc++;

    // Face Mesh every frame
    var p = FM ? FM.send({ image: videoEl }) : Promise.resolve();
    p.then(function () {
      // Hands every 3rd frame (saves GPU, lerp keeps it smooth)
      if (HM && fc % 3 === 0) {
        return HM.send({ image: videoEl });
      }
    }).then(function () {
      requestAnimationFrame(sendLoop);
    }).catch(function (e) {
      dbg('send err: ' + (e.message || e));
      setTimeout(sendLoop, 150);
    });
  }

  startCamera();
})();
