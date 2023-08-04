import React from "react";
import FormDemo from "../../components/form/FormDemo";
import BrandFive from "../../components/brand/BrandFive";

const HeroBannerEleven = () => {
  return (
    <div className="hero-banner-eleven lg-container">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <div className="hero-text-wrapper">
              <h1>
                Free Access <br /> to {" "}
                <span>
                  study 
                  <img
                    src="images/shape/line-shape-12.svg"
                    alt="shape"
                    className="cs-screen"
                  />
                </span>
                {" "} AI.
              </h1>
              <p className="hero-sub-heading">
                Providing access to Neural Network, <br /> and Machine Learning contents
              </p>
            </div>
            {/* .hero-text-wrapper */}
          </div>
          {/* End .col-xl-7 */}

          <div className="illustration-container">
            <img src="images/assets/ils_11.svg" alt="illustration" />
          </div>
        </div>
        {/* Emd .row */}
      </div>
      {/* End .container */}
      {/*  /.partner-slider-two */}
    </div>
    //    .hero-banner-eleven
  );
};

export default HeroBannerEleven;
