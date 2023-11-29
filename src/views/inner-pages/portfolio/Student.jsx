import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../components/header/landing/HeaderLandingDocSignature";
import StudentInfo from "./StudentInfo";
import { getStudent } from '../../FirebaseClient';
import LearningPath from "../../core/LearningPath"

const Student = () => {
  const { studentId } = useParams();
  const [student, setStudent] = useState('');

  useEffect(() => {
    const fetchStudent = async () => {
      const student = await getStudent(studentId)
      setStudent(student);
    }
    fetchStudent()
  }, [studentId]);

  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>
          {student && student.name} - Student
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingDocSignature />
      {/* End Header */}

      {/* =============================================
         Fancy Hero Six
        ==============================================  */}
      <div className="portfolio-details-one mt-75 mb-150 md-mb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <div className="header text-center">
                <div className="tag">Student</div>
                <div className="title-style-ten">
                  <h2>{student && student.name}</h2>
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="main-content mt-75">
            <div className="row">
              <div className="col-xl-11 m-auto">
                <div className="row">
                  <div className="col-md-4 order-md-last">
                    <ul className="project-info clearfix ps-xl-5">
                      <StudentInfo startDate={student.startDate} client={student.client} goal={student.goal} duration={student.duration} studyTime={student.studyTime} />
                    </ul>
                    {/* End .project info */}
                  </div>
                  {/* End .col */}

                  <div className="col-md-8 order-md-first">
                    <h4>Prerequisite knowledge</h4>
                    <p> {student && student.prerequisite} </p>
                    <h4>Expectation</h4>
                    <p> {student && student.expectation} </p>

                    {student && student.recommend && (
                      <div>
                        <h4>Recommendation</h4>
                        <p> {student && student.recommend} </p>
                      </div>
                    )}

                    {student && student.learningPath && student.learningPath.map((val, i) => (
                      <div key={i}>
                        <h4> Learning Path: {student.learningPath[i].label}</h4>
                        <LearningPath learningPath={student.learningPath[i]}></LearningPath> <br></br>
                      </div>
                    ))}

                    {student && student.record && (
                      <div>
                        <h4>Recorded Lesson</h4> 
                        {student.record.map((val, i) => (
                          <div key={i}>
                            <a href={val.url}> {val.title} on {val.date}</a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
              
                  {/* End .col */}
                </div>
                {/* End .row */}
                {/* End .top-border */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-hero-six */}
    </div>
  );
};

export default Student;
