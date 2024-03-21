import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../../components/header/landing/HeaderLandingDocSignature";
import ScrollspyNav from "react-scrollspy-nav";
import { getAllResearch } from "../../../FirebaseClient"

const Research = () => {
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
                  <li className="nav-item">
                    <a className="nav-link" href="#opt3">
                      3. Published Papers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#opt4">
                      4. Guide
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-8">
                {/* Tab panes */}
                <div className="tab-content ">
                  <div id="opt1">
                    <h2 className="font-gilroy-bold">Research Proposals</h2>
                    {allResearch && allResearch.filter(research => research.type === "proposal").map((research, i) => (
                      <div>
                        <h3> {research.title} </h3>
                        <p> {research.description} </p>

                        {(research.proposal || research.paper || research.report) &&
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
                          </div>
                        }
                      </div>
                    ))}
                  </div>
                  <div id="opt2">
                    <h2 className="font-gilroy-bold">On-going Research</h2>
                    {allResearch && allResearch.filter(research => research.type === "on-going").map((research, i) => (
                      <div>
                        <h3> {research.title} </h3>
                        <div className="update-date"> {research.author} </div>
                        <p> {research.description} </p>

                        {(research.proposal || research.paper || research.report) &&
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
                          </div>
                        }
                      </div>
                    ))}
                  </div>
                  <div id="opt3">
                    <h2 className="font-gilroy-bold">Published Papers</h2>
                    {allResearch && allResearch.filter(research => research.type === "published").map((research, i) => (
                      <div>
                        <h3> {research.title} </h3>
                        <div className="update-date"> {research.author} </div>
                        <p> {research.description} </p>

                        {(research.proposal || research.paper || research.report) &&
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
                          </div>
                        }

                        {research.link && research.link.map((link, i) => (
                          <a href={link}> {link} </a>
                        ))}
                      </div>
                    ))}
                  </div> <br />
                  <div id="opt4">
                    <h2 className="font-gilroy-bold">Guide for students</h2>
                    <div>

                      <p> To graduate you need to write a 50-page Thesis following FPT Thesis format. Most of the students I'm guiding are encouranged to write an Acadmic Paper based on the Thesis. Conference Paper length should be about: 6 to 10 pages or Journal article can range from around 8 to 15 pages </p>

                      <h4> Research Proposal </h4>
                      <p> https://docs.google.com/document/d/162mYgciw8uCHKy0ra70rVnQ2Jb7_S-Z1/edit </p>

                      <h4> Image Processing Tips </h4>
                      <p> https://neptune.ai/blog/image-segmentation-tips-and-tricks-from-kaggle-competitions </p>

                      <h4> Natural Language Processing Tips </h4>
                      <p> https://neptune.ai/blog/tips-to-train-nlp-models </p>

                      <h4> FPT Thesis Template </h4>
                      <p> https://github.com/hughiephan/DPL/raw/main/FPT%20Thesis%20Template.docx </p>

                      <h4> Writing Format</h4>
                      <p> https://www.overleaf.com/latex/templates/ieee-conference-template/grfzhhncsfqn </p>

                    </div>
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

export default Research;
