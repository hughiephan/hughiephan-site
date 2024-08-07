import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../../components/header/landing/HeaderLandingDocSignature";
import FancyVideoFive from "../../../../components/video/FancyVideoFive";
import LearningPath from "../../../core/LearningPath"
import { getCourse } from "../../../FirebaseClient"

const Course = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState('');
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const fetchCourse = async () => {
      const course = await getCourse(courseId)
      setCourse(course);
    }
    fetchCourse()
  }, [courseId]);

  
  useEffect(() => { // Generate Keywords for SEO based on all the labels of all learning path
    const extractLabels = (data, labels) => {
      if (data && data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          const item = data[i];
          if (item.label) {
            labels.push(item.label);
          }
          if (item.children) {
            extractLabels(item.children, labels);
          }
        }
      }
    };

    const extractedLabels = [];
    extractLabels(course.learningPath, extractedLabels);
    setKeyword(extractedLabels);
  }, [course]);


  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title> {course && course.title} - Course </title>

        {course && keyword &&
          <meta name="keywords" content={keyword} />
        }

        {course && course.description &&
          <meta name="description" content={course && course.description} />
        }

        {course && course.title &&
          <meta property="og:title" content={course.title} />
        }
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
            <div className="page-title"> {course && course.subTitle} </div>
            <div className="row">
              <div className="col-xl-8 col-lg-10 col-md-10 m-auto">
                <h1 className="heading"> {course && course.title} </h1>
                <p className="sub-heading">
                  {course && course.description}
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
      <div className="fancy-text-block-nine mt-100 md-mt-80">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="container">

          {course && course.learningPath && course.learningPath.map((val, i) => (
            <div key={i} className="title-style-two text-center mb-35 md-mb-10">
              <div className="row">
                <div className="col-lg-10 m-auto">
                  <p>Learning Path {i + 1}</p>
                  <h2> {course.learningPath[i].label} </h2> <br></br> <br></br>
                  <LearningPath learningPath={course.learningPath[i]}></LearningPath> <br></br>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      {/* /.fancy-text-block-nine */}

      {/* =============================================
				Fancy Text block Nine
			==============================================  */}
      <div className="fancy-text-block-nine mt-130 md-mt-80">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="container">

          {course && course.rule && course.rule.map((rule, i) => (
            <div key={i}>
              <div className="title-style-two text-center mb-35 md-mb-10">
                <div className="row">
                  <div className="col-lg-10 m-auto">
                    <p>Guideline</p>
                    <h2 style={{ textTransform: 'capitalize' }}> {rule.type} </h2>
                  </div>
                </div>
              </div>
              {/* End title-style-two */}
              <div className="row">
                <div className="col-xl-10 m-auto">
                  <div className="text-meta">

                    {rule && rule.requirement &&
                      <div>
                        <h3> Requirement </h3> <br />
                        {rule.requirement}
                        <br /> <br />
                      </div>
                    }

                    {rule && rule.criteria &&
                      <div>
                        <h3> Score Criteria </h3> <br />
                        {rule.criteria}
                        <br /> <br />
                      </div>
                    }

                    {rule && rule.submit &&
                      <div>
                        <h3> Submission </h3> <br />
                        {rule.submit}
                        <br /> <br />
                      </div>
                    }

                    {rule && rule.note &&
                      <div>
                        <h3> Note </h3> <br />
                        {rule.note}
                        <br /> <br />
                      </div>
                    }
                  </div>
                </div>
              </div>
              {/* End .row */}
              <br></br><br></br>
            </div>
          ))};

          {course && course.demo &&
            <div className="fancy-text-block-eleven mt-100 md-mt-50">
              <div className="container">
                <FancyVideoFive description={course.demo.description} videoId={course.demo.videoId} date={course.demo.date} />
              </div>
            </div>
            /* /.fancy-text-block-eleven */
          }
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

export default Course;
