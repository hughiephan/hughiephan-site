import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../components/header/landing/HeaderLandingDocSignature";
import CourseIframe from '../../CourseIframe';
import { getCourse } from '../../FirebaseClient';


const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState('');
  
  useEffect(() => {
    const fetchCourse = async () => {
      const course = await getCourse(courseId)
      setCourse(course);
    }
    fetchCourse()
  }, []);


  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>Blog Details || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingDocSignature />
      {/* <Header /> */}
      {/* End Header */}

      {/* =============================================
            Fancy Hero Two
        ==============================================  */}
      <div className="fancy-hero-five bg-white">
        <img
          src="../images/shape/95.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="../images/shape/96.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <div className="bg-wrapper ">
          <div className="container">
            <div className="col-lg-10 m-auto text-center">
              <h6 className="page-title"> {course.course} </h6>
              <h1 className="heading">
                <span>
                  {course.title}
                  <img src="../images/shape/line-shape-11.svg" alt="" />
                </span>
              </h1>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-two */}

      {/* =====================================================
            Feature Blog One
        ===================================================== */}
      <div className="blog-page-bg">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1 col-lg-12 feature-blog-one width-lg blog-details-post-v1">
              <div className="post-meta">
                <div className="tag">{course.date}</div>
                <h3 className="title">
                  {course.title}
                </h3>
                <CourseIframe courseIframe={course.iframe}/>
              </div>
              {/* /End post content  */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* /.feature-blog-one */}
    </div>
  );
};

export default CourseDetails;
