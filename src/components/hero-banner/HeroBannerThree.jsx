import React from "react";
import FormDoc from "../form/FormDoc";
import { Link } from "react-router-dom";

const HeroBannerThree = () => {
  return (
    <div className="hero-banner-three">
      <div style={{height: "380px"}} className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-11 col-md-8 m-auto">
            <h1 style={{fontSize: "40px"}} className="font-rubik">Reading</h1>
          </div>
          {/* End .col */}

          <div className="col-xl-8 col-lg-9 m-auto">
            <p style={{fontSize: "25px"}} className="sub-text font-rubik">
              My collection of AI and math readings.
            </p>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}

        {/* <div className="search-filter-form">
          <FormDoc />
        </div> */}
        {/* End search-filter-from */}

        {/* <img
          src="images/assets/ils_09.svg"
          alt="illustration"
          className="illustration"
        /> */}
      </div>
      {/* /.container */}

      <img src="images/shape/68.svg" alt="shape" className="shapes shape-one" />
      <img src="images/shape/69.svg" alt="shape" className="shapes shape-two" />
      <img
        src="images/shape/70.svg"
        alt="shape"
        className="shapes shape-three"
      />
      <img
        src="images/shape/71.svg"
        alt="shape"
        className="shapes shape-four"
      />
      <img
        src="images/shape/72.svg"
        alt="shape"
        className="shapes shape-five"
      />
      <img src="images/shape/73.svg" alt="shape" className="shapes shape-six" />
      <img
        src="images/shape/74.svg"
        alt="shape"
        className="shapes shape-seven"
      />
      <img
        src="images/shape/75.svg"
        alt="shape"
        className="shapes shape-eight"
      />
      <img
        src="images/shape/76.svg"
        alt="shape"
        className="shapes shape-nine"
      />
      <img src="images/shape/77.svg" alt="shape" className="shapes shape-ten" />
    </div>
    // End hero-banner-three
  );
};

export default HeroBannerThree;
