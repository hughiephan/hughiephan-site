import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../components/header/landing/HeaderLandingDocSignature";
import TutorialMarkdown from '../../TutorialMarkdown';
import { getLab } from '../../FirebaseClient';
import axios from 'axios';

const LabDetails = () => {
  const { labId } = useParams();
  const [ lab, setLab] = useState('');
  const [ markdownContent, setMarkdownContent] = useState('');
  
  useEffect(() => {
    const fetchLab = async () => {
      const lab = await getLab(labId)
      setLab(lab);
      axios.get(lab.markdown).then((response) => {
        setMarkdownContent(response.data);
      });
    }
    fetchLab()
  }, [labId]);

  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title> {lab && lab.title} - Lab Details</title>

        {lab && lab.keyword &&
          <meta name="keywords" content={lab && lab.keyword} />
        }
        
        {lab && lab.description &&
          <meta name="description" content={lab && lab.description} />
        }

        {lab && lab.title &&
          <meta property="og:title" content={lab.title} />
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
              <h6 className="page-title"> {lab.course} </h6>
              <h1 className="heading">
                <span>
                  {lab.title}
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
                <div className="tag">{lab.date}</div>

                <div className='tutorial-markdown'> 
                  <TutorialMarkdown markdownContent={markdownContent} />
                </div>

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

export default LabDetails;
