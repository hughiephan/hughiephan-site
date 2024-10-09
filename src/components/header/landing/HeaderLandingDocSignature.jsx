import React, { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import HeaderPopupForm from "../../form/HeaderPopupForm";
// import MegaMenuLanding from "../../header/mega-menu/MegaMenuLanding";
import { getAllCourse, getAllStudent, getAllTopic, getAllExperiment, getAllDomain } from '../../../views/FirebaseClient';

Modal.setAppElement("#root");

const HeaderLandingDocSignature = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);
  const [allCourse, setAllCourse] = useState('');
  const [allStudent, setAllStudent] = useState('');
  // const [allTopic, setAllTopic] = useState('');
  const [allDomain, setAllDomain] = useState('');
  const [allExperiment, setAllExperiment] = useState('');

  useEffect(() => {
    const fetchAllCourse = async () => { setAllCourse(await getAllCourse()); }
    const fetchAllStudent = async () => { setAllStudent(await getAllStudent()); }
    // const fetchAllTopic = async () => { setAllTopic(await getAllTopic()); }
    const fetchAllDomain = async () => { setAllDomain(await getAllDomain()); }
    const fetchAllExperiment = async () => {
      const allExperiment = await getAllExperiment()
      setAllExperiment(allExperiment);
    }

    fetchAllCourse()
    fetchAllStudent()
    // fetchAllTopic()
    fetchAllDomain()
    fetchAllExperiment()
  }, []);

  // useEffect(() => {
  //   var text = ''
  //   {allCourse && allCourse.map((course, i) => (
  //     text = text + `<url><loc>https://hughiephan.co/#/course/` + i + `</loc></url>`
  //   ))}
  //   console.log(text)
  // }, [allCourse]);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* =============================================
				Theme Main Menu
			==============================================  */}
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-five fixed"
            : "theme-main-menu sticky-menu theme-menu-five"
        }
      >
        <div className="d-flex align-items-center justify-content-center">
          <div className="logo">
          </div>
          {/* End logo */}

          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div className="mob-header">
                <button className="toggler-menu" onClick={handleClick}>
                  <div className={click ? "active" : ""}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
              {/* End Header */}

              <div
                className="navbar-collapse collapse landing-menu-onepage"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex justify-content-between align-items-center">
                  <Scrollspy className="navbar-nav  main-side-nav font-gordita">
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        Home
                      </a>
                    </li>

                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                        Course
                      </a>
                      <ul className="dropdown-menu">
                        {allCourse && allCourse.map((course, i) => (
                          <li key={i}>
                            <Link to={`/course/${i}/${course.title.toLowerCase().replace(/\s+/g, '-')}`} className="dropdown-item">
                              {course.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>

                    {/* <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                        Topic
                      </a>
                      <ul className="dropdown-menu">
                        {allTopic && allTopic.map((topic, i) => (
                          <li key={i}>
                            <Link to={`/topic/${i}`} className="dropdown-item">
                              {topic.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li> */}

                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                        Domain
                      </a>
                      <ul className="dropdown-menu">
                        {allDomain && allDomain.map((domain, i) => (
                          <li key={i}>
                            <Link to={`/domain/${i}/${domain.title.toLowerCase().replace(/\s+/g, '-')}`} className="dropdown-item">
                              {domain.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>

                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                        Teaching
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/math" className="dropdown-item">
                            Math
                          </Link>
                        </li>
                        <li>
                          <Link to="/reading" className="dropdown-item">
                            Reading
                          </Link>
                        </li>
                        <li>
                          <Link to="/lesson" className="dropdown-item">
                            Lesson
                          </Link>
                        </li>
                        <li>
                          <Link to="/tutorial" className="dropdown-item">
                            Tutorial
                          </Link>
                        </li>
                        <li>
                          <Link to="/exercise" className="dropdown-item">
                            Exercise
                          </Link>
                        </li>
                        <li>
                          <Link to="/assignment" className="dropdown-item">
                            Assignment
                          </Link>
                        </li>
                        <li>
                          <a href="/game" className="dropdown-item">
                            Game
                          </a>
                        </li>
                        <li>
                          <Link to="/book" className="dropdown-item">
                            Book lesson
                          </Link>
                        </li>
                        {allStudent && allStudent.map((student, i) => !student.archive && (
                          <li key={i}>
                            <Link to={`/student/${i}/${student.name.toLowerCase().replace(/\s+/g, '-')}`} className="dropdown-item">
                              Student ({student.name})
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                        Research
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/fpt-undergrad" className="dropdown-item">
                            Student Guide
                          </Link>
                        </li>
                        <li>
                          <Link to="/available-project" className="dropdown-item">
                            Available Projects
                          </Link>
                        </li>
                        <li>
                          <Link to="/personal-project" className="dropdown-item">
                            Personal Projects
                          </Link>
                        </li>
                        {/* {allExperiment && allExperiment.map((experiment, i) => (
                          <li key={i}>
                            <Link to={`/experiment/${i}/${experiment.name.toLowerCase().replace(/\s+/g, '-')}`} className="dropdown-item">
                              Experiment ({experiment.name.split(' ').map(word => word[0]).join('')})
                            </Link>
                          </li>
                        ))} */}
                        <li>
                          <Link to="/published" className="dropdown-item">
                            Publications
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                        Product
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="https://aicomponent.co" className="dropdown-item">
                            AI Component
                          </a>
                        </li>
                        <li>
                          <a href="https://rxstrategist.aicomponent.co" className="dropdown-item">
                            RxStrategist
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* <li className="nav-item">
                      <a href="/#/research" className="nav-link">
                        Research
                      </a>
                    </li> */}
                  </Scrollspy>
                </div>
              </div>
            </div>
          </nav>
          <div className="right-widget">
          </div>
        </div>
      </div>
      {/* /.theme-main-menu */}

      {/* Mobile Menu Start */}
      <div className={click ? "mobile-menu  menu-open" : "mobile-menu"}>
        <div className="logo order-md-1">
          {/* <Link to="/">
            <img src="images/logo/deski_06.svg" alt="brand" />
          </Link> */}
          <div className="fix-icon text-dark" onClick={handleClick}>
            <img src="images/icon/close.svg" alt="icon" />
          </div>
          {/* Mobile Menu close icon */}
        </div>

        <Scrollspy
          className="navbar-nav"
          id="theme-menu-list"
          currentClassName="active"
          offset={-200}
        >
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={handleClick}>
              Home
            </a>
          </li>

          {allCourse && allCourse.map((course, i) => (
            <li key={i} className="nav-item">
              <a href={`/#/course/${i}/${course.title.toLowerCase().replace(/\s+/g, '-')}`} className="nav-link" onClick={handleClick}>
                {course.title}
              </a>
            </li>
          ))}

          {/* {allTopic && allTopic.map((topic, i) => (
            <li key={i} className="nav-item">
              <a href={`/#/topic/${i}`} className="nav-link" onClick={handleClick}>
                {topic.title}
              </a>
            </li>
          ))} */}

          {allDomain && allDomain.map((domain, i) => (
            <li key={i} className="nav-item">
              <a href={`/#/domain/${i}/${domain.title.toLowerCase().replace(/\s+/g, '-')}`} className="nav-link" onClick={handleClick}>
                {domain.title}
              </a>
            </li>
          ))}
          <li className="nav-item">
            <a href="/#/math" className="nav-link" onClick={handleClick}>
              Math
            </a>
          </li>
          <li className="nav-item">
            <a href="/#/reading" className="nav-link" onClick={handleClick}>
              Reading
            </a>
          </li>
          <li className="nav-item">
            <a href="/#/lesson" className="nav-link" onClick={handleClick}>
              Lesson
            </a>
          </li>
          <li className="nav-item">
            <a href="/#/tutorial" className="nav-link" onClick={handleClick}>
              Tutorial
            </a>
          </li>
          <li className="nav-item">
            <a href="/#/exercise" className="nav-link" onClick={handleClick}>
              Exercise
            </a>
          </li>
          <li className="nav-item">
            <a href="/#/assignment" className="nav-link" onClick={handleClick}>
              Assignment
            </a>
          </li>
          <li className="nav-item">
            <a href="/game" className="nav-link" onClick={handleClick}>
              Game
            </a>
          </li>
          <li className="nav-item">
            <a href="/#/book" className="nav-link" onClick={handleClick}>
              Book Lesson
            </a>
          </li>
          {allStudent && allStudent
            .map((student, i) => !student.archive && (
              <li key={i} className="nav-item">
                <a href={`/#/student/${i}/${student.name.toLowerCase().replace(/\s+/g, '-')}`} className="nav-link" onClick={handleClick}>
                  Student ({student.name})
                </a>
              </li>
            ))}

          <li className="nav-item">
            <a href="/#/fpt-undergrad" className="nav-link" onClick={handleClick}>
              Student Guide
            </a>
          </li>

          <li className="nav-item">
            <a href="/#/available-project" className="nav-link" onClick={handleClick}>
              Available Projects
            </a>
          </li>

          <li className="nav-item">
            <a href="/#/personal-project" className="nav-link" onClick={handleClick}>
              Personal Projects
            </a>
          </li>

          {/* {allExperiment && allExperiment.map((experiment, i) => (
            <li key={i} className="nav-item">
              <a href={`/#/experiment/${i}/${experiment.name.toLowerCase().replace(/\s+/g, '-')}`} className="nav-link" onClick={handleClick}>
                Experiment ({experiment.name.split(' ').map(word => word[0]).join('')})
              </a>
            </li>
          ))} */}

          <li className="nav-item">
            <a href="/#/published" className="nav-link" onClick={handleClick}>
              Publications
            </a>
          </li>

          <li className="nav-item">
            <a href="https://aicomponent.co" className="nav-link" onClick={handleClick}>
              AI Component
            </a>
            <a href="https://rxstrategist.aicomponent.co" className="nav-link" onClick={handleClick}>
              RxStrategist
            </a>
          </li>
        </Scrollspy>
      </div>
      {/* Mobile Menu End */}

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal  modal-contact-popup-one"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="box_inner ">
          <main className="main-body box_inner modal-content clearfix">
            <button className="close" onClick={toggleModalOne}>
              <img src="images/icon/close.svg" alt="close" />
            </button>
            {/* End close icon */}

            <div className="left-side">
              <div className="d-flex flex-column justify-content-between h-100">
                <div className="row">
                  <div className="col-xl-10 col-lg-8 m-auto">
                    <blockquote>
                      “I never dreamed about success. I worked for it.”
                    </blockquote>
                    <span className="bio">—Estée Lauder</span>
                  </div>
                </div>
                <img
                  src="images/assets/ils_18.svg"
                  alt=""
                  className="illustration mt-auto"
                />
              </div>
            </div>
            {/* /.left-side */}

            <div className="right-side">
              <h2 className="form-title">Contact us</h2>
              <HeaderPopupForm />
            </div>
            {/*  /.right-side */}
          </main>
          {/* /.main-body */}
        </div>
      </Modal>
      {/* End  Modal For Request a demo */}
    </>
  );
};

export default HeaderLandingDocSignature;
