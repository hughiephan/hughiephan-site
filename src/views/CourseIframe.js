import React, { useState, useEffect } from 'react';

const CourseIframe = (props) => {
  const { courseIframe } = props;
  const [iframeHeight, setIframeHeight] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth > 1000) {
        const newHeight = 500
        setIframeHeight(newHeight);
      }
      if (windowWidth <= 1000 && windowWidth > 750) {
        const newHeight = 346
        setIframeHeight(newHeight);
      }
      if (windowWidth <= 750) {
        const newHeight = 245
        setIframeHeight(newHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <iframe
        title="Course Iframe"
        src={courseIframe}
        width="99.9%"
        height={iframeHeight + 'px'}
        allowFullScreen
        position='relative'
        overflow='hidden'
      ></iframe>
    </div>
  );
};


export default CourseIframe;