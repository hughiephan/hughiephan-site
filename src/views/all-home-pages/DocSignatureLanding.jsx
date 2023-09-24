import React from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../components/header/landing/HeaderLandingDocSignature";
import HeroBannerEleven from "../../components/hero-banner/HeroBannerEleven";

const DocSignatureLanding = () => {
  return (
    <div className="main-page-wrapper font-gordita">
      <Helmet>
        <title>
          {" "}
          Home 
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingDocSignature />
      {/* End Header Landing Doc Signature */}

      <div id="home">
        <HeroBannerEleven />
      </div>
      {/* End Hero Banner Eleven */}
    </div>
  );
};

export default DocSignatureLanding;
