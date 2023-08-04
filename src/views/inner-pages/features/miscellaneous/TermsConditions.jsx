import React from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../../components/header/landing/HeaderLandingDocSignature";
import Footer from "../../../../components/footer/Footer";
import CopyRight from "../../../../components/footer/CopyRight";
import ScrollspyNav from "react-scrollspy-nav";

const TermsConditions = () => {
  return (
    <div className="doc-container main-page-wrapper">
      <Helmet>
        <title>
          Research || Hughie Phan
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
            scrollTargetIds={["opt1", "opt2", "opt3", "opt4", "opt5", "opt6"]}
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
                </ul>
              </div>

              <div className="col-lg-8">
                {/* Tab panes */}
                <div className="tab-content ">
                  <div id="opt1">
                    <h2 className="font-gilroy-bold">Research Proposals</h2>
                    <div className="update-date">LAST UPDATED: Augst 4, 2023</div>
                    <h3>Robust Meta Learning for Risk-aware Recommender System</h3>
                    <p>
                    Risk discrepancy in recommender system is often minimized by methods such as rebalancing, multi-tasking, adversarial or hyper-learning. Our meta model is inspired by the traditional Bayesian approach, where we need to balance between exploiting and exploring through a surrogate function. By learning a set of hyperparameters on a small unbiased dataset, these alternative hyperparameters can be injected along with the feature representation on the biased dataset. Our algorithm can also benefits from adversarial training, where we intentionally mix up the information between unbiased and biased data sets. In theory, this should make the hyperparameter more robust to bias. The surrogate model acts as an unbiased generator and the adversarial model acts as a biased generator, both playing the min-max game with the base discriminantor model. On each iteration, the discriminator must be updated with the new values ​​and backward the loss value to both generators. Experimenting with our initial design will provide insight into how we can tweak our model and remove bias information.
                    </p>
                    <h3>High-stakes decision making with weakly supervised data</h3>
                    <p>
                    Computational models in clinical decision support system (CDSS) can assist healthcare providers to make informed diagnoses about patients. New techniques are being developed to improve model accuracy and make more precise diagnoses. In a high-risk environment such as medical diagnosis, machine learning models must be used in conjunction with human expertise and undergo rigorous validation. Due to high reliability, adoption of these models into their real-world decisions is limited. A case study conducted by (Zytek et al., 2021) shows that if the model and the clinician have different opinions on a case, the clinician would then only use the prediction from the model as a warning flag without taking further considerations. Even if the diagnostic accuracy is improved, these models would still be insufficient for high-risk scenarios. Furthermore, increasing the accuracy beyond a certain point may lead to automation bias, making the healthcare provider blindly trust a model because it is highly accurate and ultimately makes a harmful decision. Therefore, it is necessary to have an interpretable model that can mitigate the bias while also allowing healthcare providers to actively avoid unseen bias in high-risk scenarios.
                    </p>
                  </div>
                  <div id="opt2">
                    <h2 className="font-gilroy-bold">On-going Research</h2>
                    <div className="update-date">LAST UPDATED: August 8, 2023</div>
                    <h3>MeetmEE: Engagement Estimation-based Online Meeting Room for Distance Learning</h3>
                    <p>
                    Learner engagement is associated with an essential 
                    inner state in a learning process for a successful learning outcome. 
                    Since  learning  shifted  from  traditional  offline  classrooms  to 
                    distance  learning,  there  is  a  need  to  provide  different ways to 
                    assess  a  learner’s  engagement
                    </p>
                  </div>
                  <div id="opt3">
                    <h2 className="font-gilroy-bold">Published Papers</h2>
                    <div className="update-date">LAST UPDATED: August 8, 2023</div>
                    <h3>Implementation of Automated Feedback System for Japanese Essays in Intermediate Education</h3>
                    <p>
                    Traditional Automated Essay Scoring (AES) only provides students with a holistic score, unable to provide meaningful feedback on students writing. Holistic, structure, style, word, and readability are chosen from the 6+1 writing-trait theory to create an Automated Essay Feedback (AEF) for Japanese L1 students. By combining these rule-based traits with a data-driven model, we
                    created a hybrid system that can automatically grade and give feedback to students. The system automatically identifies parts of student writing that need improvement, then recommends corrective and suggestive feedback. Our contributions are twofold: design a 5-writing-trait AEF for Japanese L1 students and implement the holistic corrective writing-trait.
                    </p>
                    <a href="https://doi.org/10.52731/liir.v003.057">https://doi.org/10.52731/liir.v003.057</a>
                    <a href="https://iaiai.org/letters/index.php/liir/article/view/57">hhttps://iaiai.org/letters/index.php/liir/article/view/57</a>
                    <a href="https://www.jaist.ac.jp/english/whatsnew/awards/2022/12/01-1.html">https://www.jaist.ac.jp/english/whatsnew/awards/2022/12/01-1.html</a>
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

export default TermsConditions;
