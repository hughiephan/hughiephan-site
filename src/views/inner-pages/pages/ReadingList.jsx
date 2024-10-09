import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../components/header/landing/HeaderLandingDocSignature";
import HeroBannerThree from "../../../components/hero-banner/HeroBannerThree";
import Reading from "../features/miscellaneous/Reading";

const ReadingList = () => {
  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>Reading</title>
      </Helmet>
      {/* End Page SEO Content */}
      <HeaderLandingDocSignature />
      <HeroBannerThree></HeroBannerThree>
      <Reading></Reading>
    </div>
  );
};

export default ReadingList;
