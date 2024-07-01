import React from "react";

const MathFeature = (props) => {
  const { mathChildren } = props;
  console.log(mathChildren)

  return (
    <div className="row justify-content-center">
      {mathChildren && mathChildren.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className="block-style-four">
            <div className="icon">
              <img src={`images/icon/${i + 11}.svg`} alt="icon" />
            </div>
            <h4>{val.title}</h4>
            <p>{val.description}</p>
            <a href={val.link}>
              {" "}
              <i className="flaticon-right-arrow"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MathFeature;
