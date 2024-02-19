import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../components/header/landing/HeaderLandingDocSignature";
import CourseIframe from '../../CourseIframe';
import { getLesson } from '../../FirebaseClient';


const LessonDetails = () => {
  const { lessonId } = useParams();
  const [lesson, setLesson] = useState('');

  useEffect(() => {
    const fetchLesson = async () => {
      const lesson = await getLesson(lessonId)
      setLesson(lesson);
    }
    fetchLesson()
  }, [lessonId]);

  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title> {lesson && lesson.title} - Lesson Details</title>

        {lesson && lesson.keyword &&
          <meta name="keywords" content={lesson && lesson.keyword} />
        }

        {lesson && lesson.description &&
          <meta name="description" content={lesson && lesson.description} />
        }

        {lesson && lesson.title &&
          <meta property="og:title" content={lesson.title} />
        }
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
              <h6 className="page-title"> {lesson.course} </h6>
              <h1 className="heading">
                <span>
                  {lesson.title}
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
                <div className="tag">{lesson.date}</div>

                {lesson && lesson.description &&
                  <div>
                    {lesson.video &&
                      <div>
                        <a href={lesson.video} target="_blank" rel="noreferrer">
                          <i className="fa fa-youtube-play" ></i> Available on Youtube
                        </a>
                      </div>
                    }
                    <h4 style={{ paddingTop: '10px' }} className="title"> Introduction </h4>
                    <p> {lesson.description} </p>
                  </div>
                }

                {lesson && lesson.iframe &&
                  <div>
                    <h4 className="title">Slides</h4>
                    {lesson.question && <p> {lesson.question} </p>}
                    <CourseIframe courseIframe={lesson.iframe} />
                  </div>
                }

                {lesson && lesson.material &&
                  <div>
                    <h4 style={{ marginBottom: '15px' }} className="title">Material</h4>
                    {lesson.material.map((material, i) => (
                      <div key={i}>
                        <a href={material.url}> {material.type.charAt(0).toUpperCase() + material.type.slice(1)} {i + 1}: {material.label} </a>
                      </div>
                    ))}
                  </div>
                }

                {lesson && lesson.reference &&
                  <div>
                    <h4 style={{ marginBottom: '10px' }} className="title">Reference</h4>
                    {lesson.reference.map((reference, i) => (
                      <div>
                        <p style={{ paddingTop: '5px' }}> {reference.url} </p>
                      </div>
                    ))}
                  </div>
                }
              </div>
              {/* /End post content  */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* /.feature-blog-one */}
    </div >
  );
};

export default LessonDetails;
