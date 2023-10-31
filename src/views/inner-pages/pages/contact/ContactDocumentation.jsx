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

const ContactDocumentation = () => {
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
                <h2>Welcome to my website</h2>
                <div className="sub-text mt-15">
                  I'm Huy Phan, but you can call me Hughie. I'm an AI Lecturer at FPT University and my research is centered on creating next-generation AI models. On this website, you can discover the courses I'm currently teaching and my research as well. Feel free to contact me or just say hi!
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

export default ContactDocumentation;
