import React from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../components/header/landing/HeaderLandingDocSignature";
import BookIframe from "../../BookIframe"


const ProductCustomerSupport = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>
          Book Lesson
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingDocSignature />
      {/* End Header */}

      {/* 	=============================================
				Fancy Hero Three
			============================================== */}
      
      {/* /.fancy-hero-three */}

      {/* 	=============================================
				Fancy Feature Seven
			==============================================  */}
      <div className="fancy-feature-seven">
        <div className="container">
          <div className="block-wrapper">
            <div className="block-style-nine">
              <div className="row align-items-center">
                <div
                  className="col-lg-7 col-md-9 m-auto"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div className="illustration-holder">
                    <img src="images/assets/ils_04_customized.svg" alt="illustrator" />
                  </div>
                  {/* /.illustration-holder */}
                </div>
                <div
                  className="col-lg-5"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                >
                  <div className="text-wrapper">
                    <h6>Book a Lesson</h6>
                    <h3 className="title font-gilroy-bold">
                      Personalized AI lessons 
                    </h3>
                    <p className="font-rubik">
                      I'll share and simplify complex AI topics for easy comprehension. No matter your skill level, I tailor lessons to meet your specific needs and through hands-on tutorials. https://www.fiverr.com/hughiephan
                    </p>
                  </div>
                  {/* /.text-wrapper */}
                </div>
              </div>
            </div>
            {/* /.block-style-nine */}
          </div>
        </div>
      </div>
      {/* /.fancy-feature-seven */}
      <BookIframe></BookIframe>
    </div>
  );
};

export default ProductCustomerSupport;
