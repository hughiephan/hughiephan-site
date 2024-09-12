import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../components/header/landing/HeaderLandingDocSignature";
import { getAllResearch } from "../../FirebaseClient"

const StudentGuide = () => {
  const [reaction, setReaction] = useState('');
  const [allResearch, setAllResearch] = useState('');

  useEffect(() => {
    const fetchAllResearch = async () => {
      const allResearch = await getAllResearch()
      setAllResearch(allResearch);
    }
    fetchAllResearch()
  }, []);

  const handleReaction = (type) => {
    setReaction(type);
  };

  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>FPT Student Guide</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingDocSignature />
      {/* End Header */}

      {/* =============================================
            Guide
        ==============================================  */}
      <div className="faqs-inner-page">
        <img
          src="images/shape/66.svg"
          alt="shape"
          className="shapes shape-one"
        />

        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <div className="all-faqs">
                <div className="faqs-all-qus m-0">
                  <div className="article-preview mb-0">
                    <div className="d-flex">
                      <div>
                        <h3 style={{ color: "black" }} className="font-rubik">
                          Have you decided to join our lab?
                        </h3>
                        <div className="avatar-info">
                          13 June, 2024
                        </div>
                      </div>
                    </div>
                    <div className="article-details">
                      <p>
                        Students must submit a <a style={{ color: '#1e90ff' }} href="https://docs.google.com/document/d/162mYgciw8uCHKy0ra70rVnQ2Jb7_S-Z1/edit"> research proposal </a> prior to being accepted into my lab. This allows me to determine if our research interests align and to assess your commitment to preliminary research. However, if you encounter me in person, feel free to approach me directly to discuss your papers and ideas.
                      </p>
                      <br></br>
                      <p>
                        Our objective would be publishing journal and conference papers and integrating those results for the Final Capstone Project. I try to maintain strict standards to encourage your growth as a researcher. If your primary goal is to just graduate with minimal effort, our lab may not be the right fit for you.
                      </p>
                      <br></br>
                      <p>
                        <b>Graduation requirements:</b>
                      </p>
                      <ul className="list-meta">
                        <li>
                          You need to write a <a style={{ color: '#1e90ff' }} href="https://docs.google.com/document/d/1b1vj8spQSF8Yt2KqZhRCb6Huvp8uLDlv"> 50-page report </a>
                        </li>
                        <li>
                          Must attend an online meeting every two weeks to report your progress
                        </li>
                        <li>
                          Mandatory to participate in three university-required reviews.
                        </li>
                      </ul>
                      <p>
                        <b>Optional: </b> Write a  <a style={{ color: '#1e90ff' }} href="https://www.overleaf.com/latex/templates/ieee-conference-template/grfzhhncsfqn"> 6-12 page research </a> and publish at a high-tier conference and journal
                      </p>
                      <br></br>
                      <p>
                        Still unsure about your current research topic? Then take a look at the courses and <a style={{ color: '#1e90ff' }} href="/#/project"> research projects </a> available on this website. They include various research-level topics that might interest you.
                        If you find NLP interesting then have a look at this <a style={{ color: '#1e90ff' }} href="https://neptune.ai/blog/tips-to-train-nlp-models"> NLP Tips</a>,
                        or if Computer Vision interests you, start by first reading the <a style={{ color: '#1e90ff' }} href="https://neptune.ai/blog/image-segmentation-tips-and-tricks-from-kaggle-competitions"> Image Processing Tips</a>
                      </p>
                      <br></br>
                      <p> If you wish to join an existing group, please first discuss with the corresponding author. If they agree, I would be happy to welcome you into my lab.</p>
                      <ul className="list-meta">
                        {allResearch && allResearch.filter(research => research.type === "on-going").map((research, i) => (
                          research.author && research.author.split(',').map(author => author.trim()).length < 4 && research.email ? (
                            <li key={i}>
                              {research.email} ({research.title})
                            </li>
                          ) : null
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: "70px" }} className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <div className="all-faqs">
                <div className="faqs-all-qus m-0">
                  <div className="article-preview mb-0">
                    <div className="d-flex">
                      <div>
                        <h3 style={{ color: "black" }} className="font-rubik">
                          What you gain from joining our lab
                        </h3>
                        <div className="avatar-info">
                          25 June, 2024
                        </div>
                      </div>
                    </div>
                    <div className="article-details">
                      <p>
                        <b>Benefits:</b>
                      </p>
                      <ul className="list-meta">
                        <li>
                          Stage 1: Access to 4 x A4000 (16GB) and 4 x GTX3090 (24GB). These GPU will be accessible once you've created a prototype demonstration and preliminary paper
                        </li>
                        <li>
                          Stage 2: Access to 88 GPUs from the HPC System if your research is related to automated driving, along with an existing prototype demonstration and preliminary paper, is approved by QUT directors.
                        </li>
                        <li>
                          Gain the knowledge needed to conduct research and publish academic papers through hands-on research tasks and guidance from experts. I also try to promote communication among lab members so you can easily seek assistance or discuss your novel ideas with other peers
                        </li>
                        <li>
                          Collaborate with academics from FPT (Vietnam), JAIST (Japan), QUT (Australia) and work together with experienced engineers from software industry companies like Go1 (Australia). One of our researchers is currently a lecturer at VietAI
                        </li>
                        <li>
                          If you demonstrate a strong performance, you will receive a recommendation letter that you can use for applying to postgraduate scholarships or jobs
                        </li>
                        <li>
                          Our Bounty Program enables you to explore new technologies and earn rewards upon completing experiments. Please reach out to me directly for further information.
                        </li>
                        <li>
                          Published papers receive additional credit in the Capstone Project and reward from FPT University.
                        </li>
                      </ul>
                      <p>
                        For research published in scientific journals ranked for three consecutive years on Scimago, falling under the ISI and Scopus categories and ranked between Q1 and Q4, FPT University's reward is based on the ISI and Scopus categories of the <a style={{ color: '#1e90ff' }} href="https://www.scimagoir.com/rankings.php">Scimago Journal Rank</a>
                      </p>
                      <ul className="list-meta">
                        <li>
                          ISI, Scopus Q1, 100.000.000 VND
                        </li>
                        <li>
                          ISI, Scopus Q2, 80.000.000 VND
                        </li>
                        <li>
                          ISI, Scopus Q3, 60.000.000 VND
                        </li>
                        <li>
                          ISI, Scopus Q4, 40.000.000 VND
                        </li>
                      </ul>
                      <p>
                        For research published in scientific journals ranked for three consecutive years on Scimago, falling under the Scopus category and ranked Q1-Q2, FPT University's reward is based on the Scopus category and the Q ranking of the <a style={{ color: '#1e90ff' }} href="https://www.scimagoir.com/rankings.php">Scimago Journal Rank</a>
                      </p>
                      <ul className="list-meta">
                        <li>
                          Scopus Q1, 60.000.000 VND
                        </li>
                        <li>
                          Scopus Q2, 40.000.000 VND
                        </li>
                      </ul>
                      <p>
                        Publications falling under the ISI category, or Scopus, or Scopus Q3, or Scopus Q4, but not in the two categories above will receive FPT University's reward of 20.000.000 VND
                      </p>
                      <br></br>
                      <p>
                        <b>The reward for the each author</b> is then determined by multiplying the total publication reward by the author's specific coefficient, which reflects their role and contribution to the research. This product is then divided by the sum of the coefficients of all authors involved in the publication. The coefficients vary depending on whether the author is the first author, the corresponding author, both, or falls into another specified category. This method ensures a fair and balanced reward system that recognizes the varying levels of contribution and roles of each author in the publication process.
                      </p>
                      <ul className="list-meta">
                        <li>
                          First author: coefficient is 1.2
                        </li>
                        <li>
                          Corresponding author: coefficient is 1.2
                        </li>
                        <li>
                          First author and corresponding author at the same time: coefficient is 1.4
                        </li>
                        <li>
                          Author not in FPT Unversity and is from a top 500 QS ranked institution: coefficient is 0.5
                        </li>
                        <li>
                          Other authors: coefficient is 1.0
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: "50px" }} className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <div className="all-faqs">
                <div className="faqs-all-qus m-0">
                  <div style={{ background: "none", boxShadow: "none", padding: "0" }} className="article-preview mb-0">
                    <div className="d-flex">
                    </div>
                    <div style={{ borderTop: "0", marginTop: "0" }} className="article-details">
                      <div style={{ marginTop: "0" }} className="reaction-wrapper">
                        <h4>Did you find my guides helpful?</h4>
                        <div
                          className="d-flex align-items-center justify-content-center"
                          data-aos="zoom-in"
                          data-aos-duration="1200"
                          data-aos-delay="50"
                        >
                          <button onClick={() => handleReaction('happy')}>
                            <img src="images/icon/happy.svg" alt="icon" />
                          </button>
                          <button onClick={() => handleReaction('sad')}>
                            <img src="images/icon/sad.svg" alt="icon" />
                          </button>
                          <button onClick={() => handleReaction('surprised')}>
                            <img src="images/icon/surprised.svg" alt="icon" />
                          </button>
                        </div>
                        {reaction && (
                          <div style={{ padding: "10px" }}
                            data-aos="zoom-in"
                            data-aos-duration="500"
                            data-aos-delay="0">
                            {reaction === 'happy' && <p>I'm glad you're happy!</p>}
                            {reaction === 'sad' && <p>Sorry to hear that! Feel free to give me a feedback at <a style={{ color: '#1e90ff' }} href="https://www.kudoboard.com/boards/imidi2cd">https://www.kudoboard.com/boards/imidi2cd</a> </p>}
                            {reaction === 'surprised' && <p>Let me know how I can support you at phanthanhhuy1996@gmail.com</p>}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentGuide;
