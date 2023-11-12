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
                      "About me",
                      "Course",
                      "Lesson",
                      "Tutorial",
                      "Exercise",
                      "Research",
                    ]}
                    currentClassName="active"
                    offset={-500}
                  >

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
                          <li>
                            <Link to="/course/dpl" className="dropdown-item">
                              Deep Learning
                            </Link>
                          </li>
                          <li>
                            <Link to="/course/nlp" className="dropdown-item">
                              Natural Language
                            </Link>
                          </li>
                          <li>
                            <Link to="/course/gnn" className="dropdown-item">
                              Graph Neural Network
                            </Link>
                          </li>
                          <li>
                            <Link to="/course/aip" className="dropdown-item">
                              AI Planning
                            </Link>
                          </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                        Teaching
                      </a>
                      <ul className="dropdown-menu">
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
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                        Student
                      </a>
                      <ul className="dropdown-menu">
                          <li>
                            <Link to="/student/0" className="dropdown-item">
                              Andy
                            </Link>
                          </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="/#/research" className="nav-link">
                        Research
                      </a>
                    </li>
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
            <a href="/#/course/dpl" className="nav-link" onClick={handleClick}>
              Course (DPL)
            </a>
          </li>
          <li className="nav-item">
            <a href="/#/course/nlp" className="nav-link" onClick={handleClick}>
              Course (NLP)
            </a>
          </li>
          <li className="nav-item">
            <a href="/#/course/gnn" className="nav-link" onClick={handleClick}>
              Course (GNN)
            </a>
          </li>
          <li className="nav-item">
            <a href="/#/course/aip" className="nav-link" onClick={handleClick}>
              Course (AIP)
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
            <a href="/#/student/0" className="nav-link" onClick={handleClick}>
              Student (Andy)
            </a>
          </li>
          <li className="nav-item">
            <a href="/#/research" className="nav-link" onClick={handleClick}>
              Research
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
