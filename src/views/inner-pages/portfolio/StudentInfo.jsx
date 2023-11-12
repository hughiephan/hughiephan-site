import React from "react";

const StudentInfo = (props) => {
  const { startDate, client, goal, duration, studyTime } = props;

  return (
    <>
      {startDate &&
        <li>
          <strong> Start Date </strong>
          <span>{startDate}</span>
        </li>
      }
      {client &&
        <li>
          <strong> Client </strong>
          <span>{client}</span>
        </li>
      }
      {goal &&
        <li>
          <strong> Goal </strong>
          <span>{goal}</span>
        </li> 
      }
      {duration &&
        <li>
          <strong> Duration </strong>
          <span>{duration}</span>
        </li>
      }
      {studyTime &&
        <li>
          <strong> Study Time </strong>
          <span>{studyTime}</span>
        </li>
      }
    </>
  );
};

export default StudentInfo;
