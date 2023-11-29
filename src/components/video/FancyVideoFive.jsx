import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const FancyVideoFive = (props) => {
  const { description, videoId, date } = props;
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 order-lg-last">
          <div className="text-wrapper pt-0">
            <div className="title-style-two mb-35 md-mb-20">
              <h2>
                <span>
                  Student Projects{" "}
                  <img src="images/shape/line-shape-5.svg" alt="icon" />
                </span>
                from {date}
              </h2>
            </div>
            {/* <!-- /.title-style-two --> */}
            <p> {description} </p>
          </div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-md-12 order-lg-first">
          <div className="video-box">
            <img className="w-100" src="images/assets/ils_12.svg" alt="media" />
            <div
              onClick={() => setOpen(true)}
              className="fancybox video-button d-flex align-items-center justify-content-center"
            >
              <img src="images/icon/170.svg" alt="icon" />
            </div>
          </div>
          {/* <!-- /.video-box --> */}
        </div>
      </div>
    </>
  );
};

export default FancyVideoFive;
