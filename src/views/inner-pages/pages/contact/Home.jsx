import React from "react";
import { Helmet } from "react-helmet";
// import HeaderThree from "../../../../components/header/HeaderThree";
import ContactAddress from "../../../../components/contact/address/ContactAddress";
import ContactForm from "../../../../components/contact/form/ContactForm";
import CopyRight from "../../../../components/footer/CopyRight";
import FooterThree from "../../../../components/footer/FooterThree";
import CallToActionTwo from "../../../../components/call-to-action/CallToActionTwo";
import HeaderLandingDocSignature from "../../../../components/header/landing/HeaderLandingDocSignature";
import FeatureSixV2 from "../../../../components/features/FeatureSixV2";

const Home = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>
          About Me 
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingDocSignature />
      {/* End Header */}





      {/* =============================================
				Fancy Hero Four
			==============================================  */}

      <div className="fancy-hero-four bg-doc space-fix">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-11 col-md-10 m-auto">
                {/* <h6>About me</h6> */}
                <h2>Hi!</h2>
                <div className="sub-text mt-15">
                I'm Huy, but you can call me Hughie. My research is centered on developing interdisciplinary projects that connect three key areas: smart transportation and automated vehicles, psychology and medical sciences, and foundational AI. By bridging these fields, my work aims to uncover deeper insights into human-AI interaction, cognitive behavior, and intelligent system design. On this website, you can find information about the courses I’m teaching and my research interests. Feel free to contact me or just say hi!
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-four */}


      {/*  =============================================
				Contact Style Two
			==============================================  */}
      <div className="contact-style-two">
        <div className="container">
          <div className="contact-info-wrapper">
            <ContactAddress />
            <img
              src="images/shape/64.svg"
              alt="shape"
              className="shapes shape-one"
            />
            <img
              src="images/shape/65.svg"
              alt="shape"
              className="shapes shape-two"
            />
          </div>
          {/* /.contact-info-wrapper */}

        </div>
        {/* /.contact-style-two */}

        {/* /.fancy-short-banner-four */}



        {/* 	=====================================================
				Footer Style Three
			===================================================== */}
       
        {/* /.theme-footer-three */}
      </div>
    </div>
  );
};

export default Home;
