import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../../components/header/landing/HeaderLandingDocSignature";
import ScrollspyNav from "react-scrollspy-nav";
import { getAllResearch } from "../../../FirebaseClient"
import ResearchTab from "./ResearchTab";

const PersonalProject = () => {
  const [allResearch, setAllResearch] = useState('');

  useEffect(() => {
    const fetchAllResearch = async () => {
      const allResearch = await getAllResearch()
      setAllResearch(allResearch);
    }
    fetchAllResearch()
  }, []);

  return (
    <div className="doc-container main-page-wrapper">
      <Helmet>
        <title>
          Personal Project
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingDocSignature />
      {/* End Header */}

      {/* =====================================================
				Terms and Condition
			===================================================== */}

      <div className="terms_and_policy">
        <div className="container">
          <ScrollspyNav
            scrollTargetIds={["opt1", "opt2"]}
            activeNavClass="active"
            offset={170}
            scrollDuration="300"
          >
            <div className="row align-items-start">
              <div className="col-lg-4 sidenav-sticky">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" href="#opt1">
                      1. Hazard perception
                    </a>
                    <a className="nav-link" href="#opt2">
                      2. Visual attention
                    </a>
                    <a className="nav-link" href="#opt3">
                      3. Context
                    </a>
                    <a className="nav-link" href="#opt4">
                      4. Gaze
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#opt2">
                      2. Research Goals
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="#opt5">
                      5. Thesis
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#opt6">
                      6. Submission
                    </a>
                  </li>
                </ul>
                <div className="nav-tabs" style={{ padding: '30px 30px', marginTop: '-50px' }}>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ fontSize: "15px", padding: '5px 5px', margin: 0 }}>You are welcome to join any project here if you wish. If you are interested, please send me an email. Please note that most of the documents in this research require access.</p>
                  </span>
                </div>
              </div>
              <div className="col-lg-8">
                {/* Tab panes */}
                <div className="tab-content ">
                  <div id="opt1">
                    <h2 className="font-gilroy-bold">Hazard perception <img src="images/shape/line-shape-13.svg" alt="shape" /> </h2>
                    {allResearch && allResearch.filter(research => research.type === "hazard").map((research, i) => (
                      <div>
                        <h3> {research.title} </h3>
                        <div className="update-date"> {research.author} </div>
                        <p> {research.description} </p>
                        <div>
                          <ResearchTab research={research}></ResearchTab>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div id="opt2">
                    <h2 className="font-gilroy-bold">Visual attention <img src="images/shape/line-shape-13.svg" alt="shape" /> </h2>
                    {allResearch && allResearch.filter(research => research.type === "attention").map((research, i) => (
                      <div>
                        <h3> {research.title} </h3>
                        <div className="update-date"> {research.author} </div>
                        <p> {research.description} </p>
                        <div>
                          <ResearchTab research={research}></ResearchTab>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div id="opt3">
                    <h2 className="font-gilroy-bold">Context<img src="images/shape/line-shape-13.svg" alt="shape" /> </h2>
                    {allResearch && allResearch.filter(research => research.type === "context").map((research, i) => (
                      <div>
                        <h3> {research.title} </h3>
                        <div className="update-date"> {research.author} </div>
                        <p> {research.description} </p>
                        <div>
                          <ResearchTab research={research}></ResearchTab>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div id="opt4">
                    <h2 className="font-gilroy-bold">Gaze<img src="images/shape/line-shape-13.svg" alt="shape" /> </h2>
                    {allResearch && allResearch.filter(research => research.type === "gaze").map((research, i) => (
                      <div>
                        <h3> {research.title} </h3>
                        <div className="update-date"> {research.author} </div>
                        <p> {research.description} </p>
                        <div>
                          <ResearchTab research={research}></ResearchTab>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div id="opt5">
                    <h2 className="font-gilroy-bold">Thesis<img src="images/shape/line-shape-13.svg" alt="shape" /> </h2>
                    {allResearch && allResearch.filter(research => research.type === "thesis").map((research, i) => (
                      <div>
                        <h3> {research.title} </h3>
                        <div className="update-date"> {research.author} </div>
                        <p> {research.description} </p>
                        <div>
                          <ResearchTab research={research}></ResearchTab>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div id="opt6">
                    <h2 className="font-gilroy-bold">Submission<img src="images/shape/line-shape-13.svg" alt="shape" /> </h2>
                    {allResearch && allResearch.filter(research => research.type === "submission").map((research, i) => (
                      <div>
                        <h3> {research.title} </h3>
                        <div className="update-date"> {research.author} </div>
                        <p> {research.description} </p>
                        <div>
                          <ResearchTab research={research}></ResearchTab>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/*  /.tab-content */}
              </div>
            </div>
          </ScrollspyNav>
        </div>
      </div>
    </div>
  );
};

export default PersonalProject;
