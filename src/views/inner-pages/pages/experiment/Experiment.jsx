import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { getExperiment } from '../../../FirebaseClient';
import { Link } from "react-router-dom";
import HeaderLandingDocSignature from "../../../../components/header/landing/HeaderLandingDocSignature";
import ExperimentLevel from "../../../../components/pricing/pricing-two/ExperimentLevel"
import WandbIframe from "../../../WandbIframe";
import DrawIframe from "../../../DrawIframe";
import './Experiment.css'

const Experiment = () => {
  const { experimentId } = useParams();
  const [experiment, setExperiment] = useState('');

  useEffect(() => {
    const fetchExperiment = async () => {
      const experiment = await getExperiment(experimentId)
      setExperiment(experiment);
    }
    fetchExperiment()
  }, [experimentId]);

  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>Experiment</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingDocSignature />
      {/* End Header */}

      <div style={{ padding: "50px 0 50px", background: "white" }} className="fancy-hero-five">
        <div className="bg-wrapper">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">Experiment</h1>
              <p className="sub-heading space-xs">
                {experiment.name}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =============================================
            Experiment Iframe
        ==============================================  */}
      {experiment.drawio ? <DrawIframe drawio={experiment.drawio}> </DrawIframe> : null}

      {/* =============================================
            Experiment Details
        ==============================================  */}
      <div style={{ background: "white", padding: "120px 0 0" }} className="faqs-inner-page">
        <img
          src="images/shape/66.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <div className="all-faqs">
                <div className="faqs-all-qus">
                  {experiment && experiment.children.map((e, i) => (
                    <a
                      className={`article-preview d-flex ${e.status}`}
                      key={i}
                      href={e.link}
                    >
                      <div>
                        <h3 className="font-rubik">Experiment {i + 1}: {e.title}</h3>
                        <div className="avatar-info">
                          <span>Created date: {e.date} </span> <br />
                          {e.assignee && <div> <span> Assigned to: {e.assignee} </span><br /> </div>}
                          {/* {e.level && <div> <span> Level: {e.level} </span><br /> </div>} */}
                          {e.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End faqs-inner-page */}

      {/* =============================================
            Changelog
        ==============================================  */}
      {experiment.changelog && experiment.changelog.length > 0 && (
        <div>
          {experiment.changelog.map((c, i) => (
            <div>
              <div className="doc-container mt-70 sm-m0">
                <div className="container">
                  <div className="row flex-xl-nowrap no-gutters">
                    {/* <!-- ****************************** Changelog MAIN BODY ********************************* --> */}
                    <main className="col-12 doc-main-body">
                      <h5 className="font-rubik mb-20">
                        Changelog: <mark>{c.date}</mark>
                      </h5>
                      <div className="mark-blue">
                        <pre>
                          {c.comment}
                        </pre>
                      </div>
                      {/* <!-- /.mark-blue --> */}
                      <WandbIframe wandb={c.wandb}></WandbIframe>
                    </main>
                    {/* <!-- /.doc-main-body --> */}
                  </div>
                </div>
              </div>
              {/* <!-- /.doc-container --> */}
            </div>
          ))}
        </div>
      )}

      {/* =============================================
            Experiment Levels
        ==============================================  */}
      {/* <div className="pricing-section-one">
        <div style={{ padding: "0px" }} className="fancy-hero-one">
          <div className="bubble-one"></div>
          <div className="bubble-two"></div>
          <div className="bubble-three"></div>
          <div className="bubble-four"></div>
          <div className="bubble-five"></div>
          <div className="bubble-six"></div>
        </div>
        <div className="pricing-table-area">
          <img
            src="images/shape/62.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src="images/shape/63.svg"
            alt="shape"
            className="shapes shape-two"
          />
          <div className="container">
            <div className="tab-content">
              <ExperimentLevel />
            </div>
          </div>
        </div>
      </div> */}
      {/* /.pricing-section-one */}

    </div>
  );
};

export default Experiment;
