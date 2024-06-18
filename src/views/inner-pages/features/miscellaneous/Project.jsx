import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../../components/header/landing/HeaderLandingDocSignature";
import ScrollspyNav from "react-scrollspy-nav";
import { getAllResearch } from "../../../FirebaseClient"

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
              </div>

              <div className="col-lg-8">
                {/* Tab panes */}
                <div className="tab-content ">
                  <div id="opt1">
                    <h2 className="font-gilroy-bold">Research Proposals <img src="images/shape/line-shape-13.svg" alt="shape"/></h2>
                    {allResearch && allResearch.filter(research => research.type === "proposal").map((research, i) => (
                      <div>
                        <h3 style={{ display: "flex"}}> 
                          {research.title} 
                          {research.priority? <img style={{ paddingLeft: "5px", width:"30px"} }src="images/icon/40.svg" alt="media"/> : null}
                        </h3>
                        <div className="update-date"> {research.author} </div>
                        {research.from && <div style={{ marginTop: "-20px" }} className="update-date"> From: {research.from} </div>}
                        <p> {research.description} </p>
                        {(research.proposal || research.paper || research.report || research.git) &&
                          <div>
                            Detail (access required):
                            <span> </span>

                            {/* {research.proposal &&
                              <a href={research.proposal} target="_blank" rel="noreferrer">
                                <i className="fa fa-file-text-o"> Proposal</i>
                              </a>
                            }
                            <span> </span> <span> </span>

                            {research.student &&
                              <a href={research.student} target="_blank" rel="noreferrer">
                                <i className="fa fa-file-o"> Student Proposal</i>
                              </a>
                            }
                            <span> </span> <span> </span>

                            {research.paper &&
                              <a href={research.paper} target="_blank" rel="noreferrer">
                                <i className="fa fa-book"> Paper</i>
                              </a>
                            }
                            <span> </span> <span> </span>

                            {research.report &&
                              <a href={research.report} target="_blank" rel="noreferrer">
                                <i className="fa fa-pencil-square-o"> Report</i>
                              </a>
                            } */}

                            <span> </span> <span> </span>
                            {research.git &&
                              <a href={research.git} target="_blank" rel="noreferrer">
                                <i className="fa fa-github"> Git</i>
                              </a>
                            }
                          </div>
                        }
                      </div>
                    ))}
                  </div>
                  <div id="opt2">
                    <h2 className="font-gilroy-bold">On-going Research <img src="images/shape/line-shape-13.svg" alt="shape"/> </h2>
                    {allResearch && allResearch.filter(research => research.type === "on-going").map((research, i) => (
                      <div>
                        <h3> {research.title} </h3>
                        <div className="update-date"> {research.author} </div>
                        {research.from && <div style={{ marginTop: "-20px" }} className="update-date"> From: {research.from} </div>}
                        <p> {research.description} </p>

                        {/* {(research.proposal || research.paper || research.report || research.git) && */}
                        {(research.git) &&
                          <div>
                            Detail (access required):
                            <span> </span>

                            {/* {research.proposal &&
                              <a href={research.proposal} target="_blank" rel="noreferrer">
                                <i className="fa fa-file-text-o"> Proposal</i>
                              </a>
                            }
                            <span> </span> <span> </span>

                            {research.student &&
                              <a href={research.student} target="_blank" rel="noreferrer">
                                <i className="fa fa-file-o"> Student Proposal</i>
                              </a>
                            }
                            <span> </span> <span> </span>

                            {research.paper &&
                              <a href={research.paper} target="_blank" rel="noreferrer">
                                <i className="fa fa-book"> Paper</i>
                              </a>
                            }
                            <span> </span> <span> </span>

                            {research.report &&
                              <a href={research.report} target="_blank" rel="noreferrer">
                                <i className="fa fa-pencil-square-o"> Report</i>
                              </a>
                            } */}

                            <span> </span> <span> </span>
                            {research.git &&
                              <a href={research.git} target="_blank" rel="noreferrer">
                                <i className="fa fa-github"> Git</i>
                              </a>
                            }
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
