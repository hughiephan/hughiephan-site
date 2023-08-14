import React, { useEffect, useState }  from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../components/header/landing/HeaderLandingDocSignature";
import { Link } from "react-router-dom";
import { getAllTutorial } from '../../FirebaseClient';

const Tutorial = () => {
  const [allTutorial, setAllTutorial] = useState('');

  useEffect(() => {
    const fetchTutorial = async () => {
      const allTutorial = await getAllTutorial()
      setAllTutorial(allTutorial);
    }
    fetchTutorial()
  }, []);

  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>Tutorial || Hughie Phan</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingDocSignature />
      {/* End Header */}

      {/* =============================================
            Fancy Hero One
        ==============================================  */}
      <div className="fancy-hero-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto">
              <h2 className="font-rubik">Tutorials</h2>
              <p className="sub-heading">
                Practice your coding on Neural Network and Machine Learning
              </p>
            </div>
          </div>
          {/* <form onClick={handleSubmit} className="search-form">
            <input type="text" placeholder="Search for articles..." />
            <button>
              <img src="images/icon/47.svg" alt="icon" />
            </button>
          </form> */}
        </div>
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
      </div>
      {/* /.fancy-hero-one */}

      {/* =============================================
            FAQS
        ==============================================  */}
      <div className="faqs-inner-page">
        <img
          src="images/shape/66.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">

              <div className="all-faqs">
                <div className="faqs-all-qus">
                  {allTutorial && allTutorial.map((tutorial, i) => (
                    <Link
                      className="article-preview d-flex"
                      to={`/tutorial/${i}`}
                      key={i}
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                    
                      <div>
                        <h3 className="font-rubik">{tutorial.title}</h3>
                        <div className="avatar-info">
                          {tutorial.date} <br /> 
                          {/* From Tutorial: <span> {tutorial.course} </span>  <br/> */}
                          {tutorial.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                {/* /.faqs-all-qus  */}
              </div>
              {/*  /.all-faqs */}
              {/* End more-faq-ask */}
            </div>
          </div>
        </div>
      </div>
      {/* /.faqs-inner-page */}
    </div>
  );
};

export default Tutorial;