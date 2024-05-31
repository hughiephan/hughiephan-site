import React from "react";
import { Tabs, TabList, TabPanel } from "react-tabs";
import ExperimentReward from "./ExperimentReward";

const ExperimentLevel = () => {
  return (
    <Tabs>
      <TabList className="nav nav-tabs pricing-nav-one pricing-custom-nav-one mb-0">
        <div className="offer-text font-rubik mt-3">
          Experiment is determined by level and will have different rewards.
        </div>
      </TabList>

      <div className="tab-content-wrpper">
        <TabPanel>
          <ExperimentReward />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default ExperimentLevel;
