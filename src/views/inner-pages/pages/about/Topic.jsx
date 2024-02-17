import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../../components/header/landing/HeaderLandingDocSignature";
import FancyVideoFive from "../../../../components/video/FancyVideoFive";
import LearningPath from "../../../core/LearningPath"
import { getTopic } from "../../../FirebaseClient"

const Topic = () => {
  const { topicId } = useParams();
  const [topic, setTopic] = useState('');
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const fetchTopic = async () => {
      const topic = await getTopic(topicId)
      setTopic(topic);
    }
    fetchTopic()
  }, [topicId]);

  
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
    extractLabels(topic.learningPath, extractedLabels);
    setKeyword(extractedLabels);
  }, [topic]);


  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title> {topic && topic.title} - Topic </title>

        {topic && keyword &&
          <meta name="keywords" content={keyword} />
        }

        {topic && topic.description &&
          <meta name="description" content={topic && topic.description} />
        }

        {topic && topic.title &&
          <meta property="og:title" content={topic.title} />
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
            <div className="page-title"> {topic && topic.subTitle} </div>
            <div className="row">
              <div className="col-xl-8 col-lg-10 col-md-10 m-auto">
                <h1 className="heading"> {topic && topic.title} </h1>
                <p className="sub-heading">
                  {topic && topic.description}
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

          {topic && topic.learningPath && topic.learningPath.map((val, i) => (
            <div key={i} className="title-style-two text-center mb-35 md-mb-10">
              <div className="row">
                <div className="col-lg-10 m-auto">
                  <p>Learning Path {i + 1}</p>
                  <h2> {topic.learningPath[i].label} </h2> <br></br> <br></br>
                  <LearningPath learningPath={topic.learningPath[i]}></LearningPath> <br></br>
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

          {topic && topic.rule && topic.rule.map((rule, i) => (
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

          {topic && topic.demo &&
            <div className="fancy-text-block-eleven mt-100 md-mt-50">
              <div className="container">
                <FancyVideoFive description={topic.demo.description} videoId={topic.demo.videoId} date={topic.demo.date} />
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

export default Topic;
