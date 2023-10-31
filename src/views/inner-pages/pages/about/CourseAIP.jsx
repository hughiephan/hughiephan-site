import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../../components/header/landing/HeaderLandingDocSignature";
import Content from "./Content"
import { getCourse } from "../../../FirebaseClient"

const CourseAIP = () => {
  const [course, setCourse] = useState('');

  useEffect(() => {
    const fetchCourse = async () => {
      const course = await getCourse(3) // Manually get course AIP
      setCourse(course);
    }
    fetchCourse()
  }, []);


  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>
          AI Planning - Course
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      {/* =============================================
		   Start Header
		   ============================================== */}
      <HeaderLandingDocSignature />
      {/* End Header */}

      {/* 	=============================================
				Fancy Hero Two
			==============================================  */}
      <div className="fancy-hero-two">
        <div className="bg-wrapper">
          <div className="container">
            <div className="page-title">Hughie Phan</div>
            <div className="row">
              <div className="col-xl-8 col-lg-10 col-md-10 m-auto">
                <h1 className="heading">AI Planning</h1>
                <p className="sub-heading">
                  AI planning is a subfield of AI that focuses on the development of intelligent systems capable of generating sequences of actions or strategies to achieve specific goals or solve complex problems.
                </p>
              </div>
            </div>
          </div>
          {/* End .container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-two */}

      {/* =============================================
				Fancy Text block Nine
			==============================================  */}
      <div className="fancy-text-block-nine mt-130 md-mt-80">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="container">
          <div className="title-style-two text-center mb-35 md-mb-10">
            <div className="row">
              <div className="col-lg-10 m-auto">
                <p>Recommend</p>
                <h2>Learning Path</h2>
              </div>
            </div>
          </div>

          { course ? <Content course={course}></Content> : null}

        </div>
      </div>
      {/* /.fancy-text-block-nine */}

      {/* 	=====================================================
				Footer Style Two
			===================================================== */}
      <footer className="theme-footer-two pt-150 md-pt-80">
      </footer>
      {/* /.theme-footer-one */}
    </div>
  );
};

export default CourseAIP;
