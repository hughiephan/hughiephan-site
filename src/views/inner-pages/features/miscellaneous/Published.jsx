import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../../components/header/landing/HeaderLandingDocSignature";
import ScrollspyNav from "react-scrollspy-nav";
import { getAllResearch } from "../../../FirebaseClient"

const Published = () => {
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
                      1. Published Papers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#opt2">
                      2. Capstone Projects (FPT)
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-8">
                {/* Tab panes */}
                <div className="tab-content ">
                  <div id="opt1">
                    <h2 className="font-gilroy-bold">Published Papers <img src="images/shape/line-shape-13.svg" alt="shape"/></h2>
                    {allResearch && allResearch.filter(research => research.type === "published").map((research, i) => (
                      <div>
                        <h3> {research.title} </h3>
                        <div className="update-date"> {research.author} </div>
                        {research.from && <div style={{ marginTop: "-20px" }} className="update-date"> From: {research.from} </div>}
                        <p> {research.description} </p>

                        {(research.proposal || research.paper || research.report || research.git) &&
                          <div>
                            Detail (access required):
                            <span> </span>

                            {research.proposal &&
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
                            }

                            <span> </span> <span> </span>
                            {research.git &&
                              <a href={research.git} target="_blank" rel="noreferrer">
                                <i className="fa fa-github"> Git</i>
                              </a>
                            }
                          </div>
                        }

                        {research.link && research.link.map((link, i) => (
                          <a href={link}> {link} </a>
                        ))}
                      </div>
                    ))}
                  </div> <br />
                  <div id="opt2">
                    <h2 className="font-gilroy-bold">Capstone Projects (FPT) <img src="images/shape/line-shape-13.svg" alt="shape"/></h2>
                    {allResearch && allResearch.filter(research => research.type === "report").map((research, i) => (
                      <div>
                        <h3> {research.title} </h3>
                        <div className="update-date"> {research.author} </div>
                        {research.from && <div style={{ marginTop: "-20px" }} className="update-date"> From: {research.from} </div>}
                        <p> {research.description} </p>

                        {(research.proposal || research.paper || research.report || research.git) &&
                          <div>
                            Detail (access required):
                            {/* <span> </span>

                            {research.proposal &&
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
                            }
                            <span> </span> <span> </span> */}
                            {research.git &&
                              <a href={research.git} target="_blank" rel="noreferrer">
                                <i className="fa fa-github"> Git</i>
                              </a>
                            }
                          </div>
                        }

                        {research.link && research.link.map((link, i) => (
                          <a href={link}> {link} </a>
                        ))}
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

export default Published;
