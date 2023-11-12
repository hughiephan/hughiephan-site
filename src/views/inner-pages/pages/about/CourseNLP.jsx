import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../../components/header/landing/HeaderLandingDocSignature";
import LearningPath from "../../../core/LearningPath"
import { getCourse } from "../../../FirebaseClient"

const CourseNLP = () => {
  const [course, setCourse] = useState('');

  useEffect(() => {
    const fetchCourse = async () => {
      const course = await getCourse(1) // Manually get course NLP
      setCourse(course);
    }
    fetchCourse()
  }, []);


  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>
          Natural Language Processing - Course
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
            <div className="page-title">NLP301c FPT Unversity</div>
            <div className="row">
              <div className="col-xl-8 col-lg-10 col-md-10 m-auto">
                <h1 className="heading">Natural Language Processing</h1>
                <p className="sub-heading">
                  Join this course to explore Natural Language Processing and unlock the power of human-computer interaction through language understanding and generation.
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

          { course && <LearningPath course={course}></LearningPath> }

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

export default CourseNLP;
