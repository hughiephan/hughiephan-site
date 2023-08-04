import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import HeaderPopupForm from "../../form/HeaderPopupForm";
import MegaMenuLanding from "../../header/mega-menu/MegaMenuLanding";

Modal.setAppElement("#root");

const HeaderLandingDocSignature = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

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
                  <Scrollspy
                    className="navbar-nav  main-side-nav font-gordita"
                    items={[
                      "Home",
                      "Course",
                      "Tutorial",
                      "Research",
                      "About me"
                    ]}
                    currentClassName="active"
                    offset={-500}
                  >
                    {/* <li className="nav-item dropdown position-static">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#home"
                        data-toggle="dropdown"
                      >
                        Home
                      </a>
                      <div className="dropdown-menu">
                        <MegaMenuLanding />
                      </div>
                    </li> */}
                    <li className="nav-item">
                      <a href="/" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/#/course" className="nav-link">
                        Course
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/#/tutorial" className="nav-link">
                        Tutorial
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/#/research" className="nav-link">
                        Research
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/#/about-me" className="nav-link">
                        About me
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a href="#faq" className="nav-link">
                        FAQ’s
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
          items={["home", "product", "feature", "story", "pricing", "faq"]}
          currentClassName="active"
          offset={-200}
        >
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={handleClick}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/#/course" className="nav-link" onClick={handleClick}>
              Course
            </a>
          </li>
          <li className="nav-item">
            <a href="/#/tutorial" className="nav-link" onClick={handleClick}>
              Tutorial
            </a>
          </li>
          <li className="nav-item">
            <a href="/#/research" className="nav-link" onClick={handleClick}>
              Research
            </a>
          </li>
          <li className="nav-item">
            <a href="/#/about-me" className="nav-link" onClick={handleClick}>
              About me
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
