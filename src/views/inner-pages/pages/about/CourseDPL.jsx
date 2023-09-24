import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../../components/header/landing/HeaderLandingDocSignature";
import FancyVideoFive from "../../../../components/video/FancyVideoFive";
import Content from "./Content"
import { getCourse } from "../../../FirebaseClient"

const CourseDPL = () => {
  const [course, setCourse] = useState('');

  useEffect(() => {
    const fetchCourse = async () => {
      const course = await getCourse(0) // Manually get course Deep Learning
      setCourse(course);
    }
    fetchCourse()
  }, []);

  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>
          Deep Learning - Course
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      {/* =============================================
		   Start Header
		   ============================================== */}
      <HeaderLandingDocSignature />
      {/* End Header */}

      {/* 	=============================================
				Fancy Hero Two
			==============================================  */}
      <div className="fancy-hero-two">
        <div className="bg-wrapper">
          <div className="container">
            <div className="page-title">DPL302m FPT Unversity</div>
            <div className="row">
              <div className="col-xl-8 col-lg-10 col-md-10 m-auto">
                <h1 className="heading">Deep Learning</h1>
                <p className="sub-heading">
                By the end of this course, you'll possess a solid grasp of deep learning principles and confidence to tackle AI-related challenges.
                </p>
              </div>
            </div>
          </div>
          {/* End .container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-two */}

      {/* =============================================
				Fancy Text block Nine
			==============================================  */}
      <div className="fancy-text-block-nine mt-130 md-mt-80">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="container">
          <div className="title-style-two text-center mb-35 md-mb-10">
            <div className="row">
              <div className="col-lg-10 m-auto">
                <p>Recommend</p>
                <h2>Learning Path</h2>
              </div>
            </div>
          </div>

          { course ? <Content course={course}></Content> : null}

        </div>
      </div>
      {/* /.fancy-text-block-nine */}

      {/* =============================================
				Fancy Text block Nine
			==============================================  */}
      <div className="fancy-text-block-nine mt-130 md-mt-80">
        <div className="shapes shape-one"></div>
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="container">
          <div className="title-style-two text-center mb-35 md-mb-10">
            <div className="row">
              <div className="col-lg-10 m-auto">
                <p>Guideline</p>
                <h2>Project</h2>
              </div>
            </div>
          </div>
          {/* End title-style-two */}
          <div className="row">
            <div className="col-xl-10 m-auto">
              <p
                className="text-meta"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h3> Requirements </h3> <br/>
                Your group is required to implement the code and answer Q/A questions. <br/>
                Your group should be around 2~3 people. <br/>
                Your group is allowed to discuss or use any tools (ChatGPT, Stack Overflow, Kaggle,...) but copying other groups' code is not allowed !! <br/>
                Your group can use any technique that has a deep learning model involves: transfer learning, pre-train, finetune, ensemble learning, hyperparameter tuning, pre-process image, data augmentation,... <br/>
                Your group SHOULD NOT use any external datasource besides the one provided.
                
                <br/> <br/>
                <h3> Score Criteria </h3> <br/>
                Originality of your solution. <br/>
                Result of your solution. <br/>
                In-class Q/A to test your understanding.
                <br/> <br/>
                <h3> Submission </h3> <br/>
                For 1st, 2nd highest score submission (~ 5 students), group will get maximum: 10 points.  <br/>
                For 3rd, 4th highest score submission (~ 5 students), group will get maximum: 9 points. <br/>
                For 5th+ highest score submission, group will get maximum: 8 points. <br/>
                Submit on Kaggle and send your code to my email huypt24@fe.edu.vn 
                
                <br/> <br/>
                <h3> Note </h3> <br/>
                This is a group project, but the score of each members will be different after Q/A session. <br/>
                If you don't participate in Q/A session, there are two options: <br/>
                - Your score = average of your group score minus 2. <br/>
                - Retake your missed project in the next Q/A session. <br/>
                You can participate in the project by yourself without joining a group, but there won't be any bonus score.
              </p>
            </div>
          </div>
          {/* End .row */}

          <br/> <br/>
          <div className="title-style-two text-center mb-35 md-mb-10">
            <div className="row">
              <div className="col-lg-10 m-auto">
                <p>Guideline</p>
                <h2>Lab</h2>
              </div>
            </div>
          </div> 
          {/* End title-style-two */}
          <div className="row">
            <div className="col-xl-10 m-auto">
              <p
                className="text-meta"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h3> Requirements </h3> <br/>
                You are required to implement the code and answer Q/A questions. <br/>
                You are allowed to discuss or use any tools (ChatGPT, Stack Overflow, Kaggle,...) but copying other students' code is not allowed !! <br/>
                You can use any technique that has a deep learning model involves: transfer learning, pre-train, finetune, ensemble learning, hyperparameter tuning, pre-process image, data augmentation,.....
                <br/> <br/>
                <h3> Score Criteria </h3> <br/>
                Originality of your solution. <br/>
                Result of your solution. <br/>
                In-class Q/A to test your understanding.
                <br/> <br/>
                <h3> Submission </h3> <br/>
                In-class submission: you will get maximum 10 points. <br/>
                After-class submission: you will get maximum 8 points (no Q/A is needed). <br/>
                Send your code to my email huypt24@fe.edu.vn
              </p>
            </div>
          </div>
          {/* End .row */}

          <br/> <br/>
          <div className="title-style-two text-center mb-35 md-mb-10">
            <div className="row">
              <div className="col-lg-10 m-auto">
                <p>Guideline</p>
                <h2>Report</h2>
              </div>
            </div>
          </div> 
          {/* End title-style-two */}
          <div className="row">
            <div className="col-xl-10 m-auto">
              <p
                className="text-meta"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h3> Requirements </h3> <br/>
                Your group is required to implement the code and make a 1-minute demo video. <br/>
                Your group is allowed to discuss or use any tools (ChatGPT, Stack Overflow, Kaggle,...) but copying other groups' code is not allowed !! <br/>
                Your group can use any technique that has a deep learning model involves: transfer learning, pre-train, finetune, ensemble learning, hyperparameter tuning, pre-process image, data augmentation,... <br/>
                <br/>
                <h3> Score Criteria </h3> <br/>
                Originality of your solution. <br/>
                Result of your solution. <br/>
                No Q/A session for report. <br/>
                <br/> 
                <h3> Submission </h3> <br/>
                Send your code and demo video to my email huypt24@fe.edu.vn
              </p>
            </div>
          </div>
          {/* End .row */}
          
          <br/> <br/>
          <div className="title-style-two text-center mb-35 md-mb-10">
            <div className="row">
              <div className="col-lg-10 m-auto">
                <p>Guideline</p>
                <h2>Group Presentation</h2>
              </div>
            </div>
          </div> 
          {/* End title-style-two */}
          <div className="row">
            <div className="col-xl-10 m-auto">
              <p
                className="text-meta"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h3> Requirements </h3> <br/>
                Every group will be assigned with a topic below and should present that topic in 30 minutes. Slides should be in English, and presented in Vietnamese. About the content of the presentation, you should follow the below chapters' contents https://www.deeplearningbook.org (7 to 20). Everyone should speak, your score will be assigned separately based on your work and presentation. <br/>
                <br/>
                7. Regularization for Deep Learning <br/>
                8. Optimization for Training Deep Models <br/>
                9. Convolutional Networks <br/>
                10. Sequence Modeling: Recurrent and Recursive Nets <br/>
                11. Practical Methodology <br/>
                12. Applications <br/>
                13. Linear Factor Models <br/>
                14. Autoencoders <br/>
                15. Representation Learning <br/>
                16. Structured Probabilistic Models for Deep Learning <br/>
                17. Monte Carlo Methods <br/>
                18. Confronting the Partition Function <br/>
                19. Approximate Inference <br/>
                20. Deep Generative Models <br/>

                <br/>
                <h3> Submission </h3> <br/>
                Send your slides to my email huypt24@fe.edu.vn
              </p>
            </div>
          </div>
          {/* End .row */}

      <div className="fancy-text-block-eleven mt-200 md-mt-100">
        <div className="container">
          <FancyVideoFive />
        </div>
      </div>
      {/* /.fancy-text-block-eleven */}


        </div>
      </div>
      {/* /.fancy-text-block-nine */}


      {/* 	=====================================================
			Fancy Short Banner Three
			===================================================== */}


      {/* 	=====================================================
				Footer Style Two
			===================================================== */}
      <footer className="theme-footer-two pt-150 md-pt-80">
      </footer>
      {/* /.theme-footer-one */}
    </div>
  );
};

export default CourseDPL;
