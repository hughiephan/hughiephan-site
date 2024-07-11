import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../../components/header/landing/HeaderLandingDocSignature";
import ScrollspyNav from "react-scrollspy-nav";
import { getAllResearch } from "../../../FirebaseClient"
import ResearchTab from "./ResearchTab";

const Project = () => {
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
          Research
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
            scrollTargetIds={["opt1", "opt2", "opt3", "opt4"]}
            activeNavClass="active"
            offset={170}
            scrollDuration="300"
          >
            <div className="row align-items-start">
              <div className="col-lg-4 sidenav-sticky">
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link active" href="#opt1">
                      1. Research Proposals
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#opt2">
                      2. On-going Research
                    </a>
                  </li>
                </ul>
                <div className="nav-tabs" style={{ padding: '30px 30px', marginTop: '-50px' }}>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <img style={{ width: '30px' }} src="images/icon/40.svg" alt="media" />
                    <p style={{ fontSize: "15px", padding: '5px 5px', margin: 0 }}>Priority Research</p>
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ fontSize: "15px", padding: '5px 5px', margin: 0 }}>Documents of research proposals and on-going research require access. If you wish to join a project, please send me an email.</p>
                  </span>
                </div>
              </div>
              <div className="col-lg-8">
                {/* Tab panes */}
                <div className="tab-content ">
                  <div id="opt1">
                    <h2 className="font-gilroy-bold">Research Proposals <img src="images/shape/line-shape-13.svg" alt="shape" /></h2>
                    {allResearch && allResearch.filter(research => research.type === "proposal").map((research, i) => (
                      <div>
                        <h3 style={{ display: "flex" }}>
                          {research.title}
                          {research.priority ? <img style={{ paddingLeft: "5px", width: "30px" }} src="images/icon/40.svg" alt="media" /> : null}
                        </h3>
                        <div className="update-date"> {research.author} </div>
                        {research.from && <div style={{ marginTop: "-20px" }} className="update-date"> From: {research.from} </div>}
                        <p> {research.description} </p>
                        {(research.proposal || research.paper || research.report || research.git) &&
                          <div>
                            <ResearchTab research={research}></ResearchTab>
                          </div>
                        }
                      </div>
                    ))}
                  </div>
                  <div id="opt2">
                    <h2 className="font-gilroy-bold">On-going Research <img src="images/shape/line-shape-13.svg" alt="shape" /> </h2>
                    {allResearch && allResearch.filter(research => research.type === "on-going").map((research, i) => (
                      <div>
                        <h3> {research.title} </h3>
                        <div className="update-date"> {research.author} </div>
                        {research.from && <div style={{ marginTop: "-20px" }} className="update-date"> From: {research.from} </div>}
                        <p> {research.description} </p>
                        {/* {(research.proposal || research.paper || research.report || research.git) && */}
                        {(research.git) &&
                          <div>
                            <ResearchTab research={research}></ResearchTab>
                          </div>
                        }
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

export default Project;
