import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import HeaderLandingDocSignature from "../../../components/header/landing/HeaderLandingDocSignature";


const FaqDetails = () => {
  const [reaction, setReaction] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleReaction = (type) => {
    setReaction(type);
  };

  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>For FPT Undergrad</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingDocSignature />
      {/* End Header */}


      {/* =============================================
            FAQS
        ==============================================  */}
      <div className="faqs-inner-page">
        <img
          src="images/shape/66.svg"
          alt="shape"
          className="shapes shape-one"
        />

        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <div className="all-faqs">
                <div className="faqs-all-qus m-0">
                  <div className="article-preview mb-0">
                    <div className="d-flex">
                      <div>
                        <h3 style={{ color: "black"}}className="font-rubik">
                          Guide for Undergraduate Students at FPT University
                        </h3>
                        <div className="avatar-info">
                          31 May, 2024
                        </div>
                      </div>
                    </div>
                    {/* End .d-flex */}

                    <div className="article-details">
                      <p>
                        Most students must submit a <a style={{ color: '#1e90ff' }} href="https://docs.google.com/document/d/162mYgciw8uCHKy0ra70rVnQ2Jb7_S-Z1/edit"> research proposal </a> prior to being accepted into my lab. This allows me to determine if our research interests align and to assess your commitment to preliminary research. However, if you encounter me in person, feel free to approach me directly to discuss your papers and ideas. Our objective would be publishing journal and conference papers and utilizing those results for the Final Capstone Project.
                      </p>
                      <br></br>
                      <p>
                        <b>My two requirements:</b>
                      </p>
                      <ul className="list-meta">
                        <li>
                          You need to write a <a style={{ color: '#1e90ff' }} href="https://github.com/hughiephan/DPL/raw/main/FPT%20Thesis%20Template.docx"> 50-page report </a>
                        </li>
                        <li>
                          Must attend an online meeting every two weeks to report your progress
                        </li>
                      </ul>
                      <p>
                        <b>Optional: </b> Write a  <a style={{ color: '#1e90ff' }} href="https://www.overleaf.com/latex/templates/ieee-conference-template/grfzhhncsfqn"> 6-12 page research </a> and publish at a high-tier conference and journal
                      </p>
                      <br></br>
                      <p>
                        Still unsure about your current research topic? Then take a look at the courses available on this website. They include various research-level topics that might interest you.
                        If you find NLP interesting then have a look at this <a style={{ color: '#1e90ff' }} href="https://neptune.ai/blog/tips-to-train-nlp-models"> NLP Tips</a>,
                        or if Computer Vision interests you, start by first reading the <a style={{ color: '#1e90ff' }} href="https://neptune.ai/blog/image-segmentation-tips-and-tricks-from-kaggle-competitions"> Image Processing Tips</a>
                      </p>

                      <div className="reaction-wrapper">
                        <h4>Did you find this guide helpful?</h4>
                        <div
                          className="d-flex align-items-center justify-content-center"
                          data-aos="zoom-in"
                          data-aos-duration="1200"
                          data-aos-delay="50"
                        >
                          <button onClick={() => handleReaction('happy')}>
                            <img src="images/icon/happy.svg" alt="icon" />
                          </button>
                          <button onClick={() => handleReaction('sad')}>
                            <img src="images/icon/sad.svg" alt="icon" />
                          </button>
                          <button onClick={() => handleReaction('surprised')}>
                            <img src="images/icon/surprised.svg" alt="icon" />
                          </button>
                        </div>
                        {reaction && (
                          <div style={{ padding: "10px" }}
                            data-aos="zoom-in"
                            data-aos-duration="500"
                            data-aos-delay="0">
                            {reaction === 'happy' && <p>I'm glad you're happy!</p>}
                            {reaction === 'sad' && <p>Sorry to hear that! Feel free to contact me directly at phanthanhhuy1996@gmail.com</p>}
                            {reaction === 'surprised' && <p>Let me know how I can support you at phanthanhhuy1996@gmail.com</p>}
                          </div>
                        )}
                      </div>
                      {/* /.reaction-wrapper */}
                    </div>
                    {/*  /.article-details */}
                  </div>
                  {/* /.article-preview  */}
                </div>
                {/* /.faqs-all-qus */}
              </div>
              {/* /.all-faqs */}
            </div>
          </div>
        </div>
      </div>
      {/* /.faqs-inner-page */}
    </div>
  );
};

export default FaqDetails;
