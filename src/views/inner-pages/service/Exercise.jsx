import React, { useState, useEffect } from "react";
import HeaderLandingDocSignature from "../../../components/header/landing/HeaderLandingDocSignature";
import { Helmet } from "react-helmet";
import CounterOne from "../../../components/counter/CounterOne";
import Question from "../../../components/faq/Question";
import { getAllQuestion } from '../../FirebaseClient';


const Exercise = () => {
  const [allQuestionWithNoAnswer, setAllQuestionWithNoAnswer] = useState('');
  const [allQuestionWithAnswer, setAllQuestionWithAnswer] = useState('');
  const [allQuestion, setAllQuestion] = useState('');

  useEffect(() => {
    const fetchQuestion = async () => {
      const allQuestion = await getAllQuestion()
      const allQuestionWithAnswer = allQuestion.filter((item) => item.hasOwnProperty("answer"));
      const allQuestionWithNoAnswer = allQuestion.filter((item) => !item.hasOwnProperty("answer"));
      setAllQuestionWithAnswer(allQuestionWithAnswer)
      setAllQuestionWithNoAnswer(allQuestionWithNoAnswer);
      setAllQuestion(allQuestion);
    }
    fetchQuestion()
  }, []);

  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>Exercise || Hughie Phan</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingDocSignature />
      {/* End Header */}

      {/* 	=============================================
				Fancy Text block Seven
			==============================================  */}
      <div className="fancy-text-block-seven seven mt-130 md-mt-80">
        <div className="bg-wrapper no-bg">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-5 col-md-6 col-sm-10 m-auto"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <CounterOne numQuestion={allQuestion.length}/>
              </div>
              {/* End .col */}

              <div
                className="col-xl-6 col-lg-7 ms-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="quote-wrapper pt-60">
                  <img src="images/icon/185.png" alt="icon" className="icon" />
                  <blockquote className="font-rubik">
                    Sharpen your knowledge with our pre-defined quizzes and questions
                  </blockquote>
                </div>
                {/* <!-- /.quote-wrapper --> */}
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}

            <h3 className="font-gordita pt-90 pb-60 md-pt-50">
              Deep Learning Questions (with answers)
            </h3>
            <Question allQuestionWithAnswer={allQuestionWithAnswer} />

            <h3 className="font-gordita pt-90 pb-60 md-pt-50">
              Deep Learning Questions (with no answers)
            </h3>
            <Question allQuestionWithNoAnswer={allQuestionWithNoAnswer} />

          </div>
          {/* End .container */}

        </div>

        {/* <!-- /.bg-wrapper --> */}
      </div>

      {/* <!-- /.fancy-text-block-seven --> */}

    </div>
  );
};

export default Exercise;
