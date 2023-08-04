import React from 'react';

const CourseIframe = (props) => {
    const { courseIframe } = props;
 
    return (
        <div>
          <iframe
            title="My Iframe Course"
            src={courseIframe}
            width="100%" 
            height="500px" 
            allowFullScreen
            position= 'relative'
            overflow = 'hidden'
          ></iframe>
        </div>
      );
  };


export default CourseIframe;