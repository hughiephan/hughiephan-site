import React from "react";

const PricingContent = [
  {
    packName: "Level 1",
    price: "5",
    packageFor: "Easy experiment",
    icon: "38",
    description: "Conduct research using fundamental techniques such as activation functions, and gathering data",
    preFeatures: [
      "60-day chat history",
      "Basic widget customization",
      "Ticketing system",
      "Data security",
    ],
  },
  {
    packName: "Level 2",
    price: "10",
    packageFor: "Medium experiment",
    icon: "40",
    description: "Experiment involves integrating provided codebase and displaying the results in Weights & Biases.",
    preFeatures: [
      "60-day chat history",
      "Basic widget customization",
      "Ticketing system",
      "Data security",
    ],
  },
  {
    packName: "Level 3",
    price: "20",
    packageFor: "Hard experiment",
    icon: "41",
    description: "Work on novel ideas to create standardized codebase and publish research papers.",
    preFeatures: [
      "60-day chat history",
      "Basic widget customization",
      "Ticketing system",
      "Data security",
    ],
  }
];

const PricingMonthly = () => {
  return (
    <div className="row justify-content-center">
      {PricingContent.map((val, i) => (
        <div className="col-lg-4 col-md-6" key={i}>
          <div className="pr-table-wrapper">
            <div className="pack-name">{val.packName}</div>
            <div className="price font-rubik">
              ${val.price}
            </div>
            <div className="pack-rec font-rubik">{val.packageFor}</div>
            <img
              src={`images/icon/${val.icon}.svg`}
              alt="icon"
              className="icon"
            />
            <div style={{padding: "0 40px"}} className="bill-cycle"> {val.description} </div>
            {/* <ul className="pr-feature">
              {val.preFeatures.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul> */}
            {/* <a href="#" className="theme-btn-four">
              Choose Plan
            </a>
            <div className="trial-text font-rubik">
              Get your 30 day free trial
            </div> */}
          </div>
          {/*  /.pr-table-wrapper */}
        </div>
      ))}
    </div>
  );
};

export default PricingMonthly;
