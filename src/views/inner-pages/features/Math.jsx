import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../components/header/landing/HeaderLandingDocSignature";
import FeatureFive from "../../../components/features/FeatureFive";
import MathFeature from "../../../components/features/MathFeature";
import { getAllMath } from '../../FirebaseClient';

const Math = () => {
  const [allMath, setAllMath] = useState('');

  useEffect(() => {
    const fetchAllMath = async () => {
      const allMath = await getAllMath()
      setAllMath(allMath);
    }
    fetchAllMath()
  }, []);

  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title> Math </title>
      </Helmet>
      {/* =============================================
		   Start Header
		   ============================================== */}
      <HeaderLandingDocSignature />
      {/* End Header */}

      {/* 	=============================================
				Fancy Text block Four
			==============================================  */}
      <div className="fancy-text-block-four pt-130 pb-120 md-pt-100 md-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8">
              {allMath && (
                <div className="title-style-one mb-40 md-mb-20">
                  <h2>{allMath[0].title}</h2>
                  <p className="font-rubik">
                    {allMath[0].description}
                  </p>
                </div>
              )}
            </div>
          </div>
          {allMath && (
            <div className="wrapper">
              <div className="row justify-content-center">
                <MathFeature mathChildren={allMath[0].children} />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* /.fancy-text-block-four */}

      {/* =============================================
				Fancy Text block Five
			==============================================  */}
      <div className="fancy-text-block-five pt-130 pb-160 md-pt-100 md-pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 ms-auto">
              {allMath && (
                <div className="title-style-one mb-50 md-mb-30">
                  <h2>{allMath[1].title}</h2>
                  <p className="font-rubik">
                    {allMath[1].description}
                  </p>
                </div>
              )}
            </div>
          </div>
          {allMath && (
            <div className="wrapper">
              <div className="row justify-content-center">
                <MathFeature mathChildren={allMath[1].children} />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* /.block-style-five */}
    </div>
  );
};

export default Math;
