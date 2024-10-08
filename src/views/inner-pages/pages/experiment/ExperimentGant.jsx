import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderLandingDocSignature from "../../../../components/header/landing/HeaderLandingDocSignature";
import { ViewMode, Gantt } from "gantt-task-react";
import { getStartEndDateForProject, initTasks } from "./helper";
// import "gantt-task-react/dist/index.css";
import { getExperiment } from '../../../FirebaseClient';
import { Link } from "react-router-dom";
import ExperimentLevel from "../../../../components/pricing/pricing-two/ExperimentLevel"
import WandbIframe from "../../../WandbIframe";
import DrawIframe from "../../../DrawIframe";

const Experiment = () => {
  const { experimentId } = useParams();
  const [view, setView] = React.useState(ViewMode.Day);
  const [tasks, setTasks] = React.useState(initTasks());
  const [isChecked, setIsChecked] = React.useState(true);
  const [experiment, setExperiment] = useState('');

  let columnWidth = 100;
  if (view === ViewMode.Year) {
    columnWidth = 350;
  } else if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }

  // const handleTaskChange = (task) => {
  //   console.log("On date change Id:" + task.id);
  //   let newTasks = tasks.map(t => (t.id === task.id ? task : t));
  //   if (task.project) {
  //     const [start, end] = getStartEndDateForProject(newTasks, task.project);
  //     const project = newTasks[newTasks.findIndex(t => t.id === task.project)];
  //     if (
  //       project.start.getTime() !== start.getTime() ||
  //       project.end.getTime() !== end.getTime()
  //     ) {
  //       const changedProject = { ...project, start, end };
  //       newTasks = newTasks.map(t =>
  //         t.id === task.project ? changedProject : t
  //       );
  //     }
  //   }
  //   setTasks(newTasks);
  // };

  // const handleTaskDelete = (task) => {
  //   const conf = window.confirm("Are you sure about " + task.name + " ?");
  //   if (conf) {
  //     setTasks(tasks.filter(t => t.id !== task.id));
  //   }
  //   return conf;
  // };

  // const handleProgressChange = async (task) => {
  //   setTasks(tasks.map(t => (t.id === task.id ? task : t)));
  //   console.log("On progress change Id:" + task.id);
  // };

  // const handleDblClick = (task) => {
  //   alert("On Double Click event Id:" + task.id);
  // };

  // const handleClick = (task) => {
  //   console.log("On Click event Id:" + task.id);
  // };

  // const handleSelect = (task, isSelected) => {
  //   console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
  // };

  // const handleExpanderClick = (task) => {
  //   setTasks(tasks.map(t => (t.id === task.id ? task : t)));
  //   console.log("On expander click Id:" + task.id);
  // };

  useEffect(() => {
    const fetchExperiment = async () => {
      const experiment = await getExperiment(experimentId)
      setExperiment(experiment);
    }
    fetchExperiment()
  }, [experimentId]);

  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>Experiment</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingDocSignature />
      {/* End Header */}

      <div style={{ padding: "50px 0 50px", background: "white" }} className="fancy-hero-five">
        <div className="bg-wrapper">
          <div className="container">
            <div className="text-center">
              <h1 className="heading">Experiment</h1>
              <p className="sub-heading space-xs">
                {experiment.name}
              </p>
            </div>
          </div>
        </div>
      </div>

      <DrawIframe></DrawIframe>
{/* 
      <Gantt
        tasks={tasks}
        viewMode={view}
        onDateChange={handleTaskChange}
        onDelete={handleTaskDelete}
        onProgressChange={handleProgressChange}
        onDoubleClick={handleDblClick}
        onClick={handleClick}
        onSelect={handleSelect}
        onExpanderClick={handleExpanderClick}
        listCellWidth={!isChecked ? "155px" : ""}
        columnWidth={columnWidth}
      /> */}

      <div style={{ background: "white", padding: "120px 0 0" }} className="faqs-inner-page">
        <img
          src="images/shape/66.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <div className="shapes shape-two"></div>
        <div className="shapes shape-three"></div>
        <div className="shapes shape-four"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <div className="all-faqs">
                <div className="faqs-all-qus">
                  {experiment && experiment.children.map((e, i) => (
                    <Link className="article-preview d-flex" key={i} >
                      <div>
                        <h3 className="font-rubik">Experiment {i + 1}: {e.title}</h3>
                        <div className="avatar-info">
                          <span>Created date: {e.date} </span> <br></br>
                          {e.assignee && <div> <span> Assigned to: {e.assignee} </span><br></br> </div>}
                          {e.level && <div> <span> Level: {e.level} </span><br></br> </div>}
                          {e.description}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End faqs-inner-page */}


      {/* =============================================
            Documentation
        ==============================================  */}

      <div className="doc-container mt-70 sm-m0">
        <div className="container">
          <div className="row flex-xl-nowrap no-gutters">
            {/* <!-- ****************************** DOC MAIN BODY ********************************* --> */}
            <main className="col-12 doc-main-body">
              <h5 className="font-rubik mb-20">
                Changelog: <mark>31/05/2024</mark>
              </h5>
              <div className="mark-blue">
                <pre>
                  Experiment initialized
                </pre>
              </div>
              {/* <!-- /.mark-blue --> */}
              <WandbIframe></WandbIframe>
              <h5 className="font-rubik mb-20">
                Changelog: <mark>1/6/2024</mark>
              </h5>
              <div className="mark-blue">
                <pre>
                  Experiment initialized
                </pre>
              </div>
            </main>
            {/* <!-- /.doc-main-body --> */}
          </div>
        </div>
      </div>
      {/* <!-- /.doc-container --> */}


      <div className="pricing-section-one">
        <div style={{ padding: "0px" }} className="fancy-hero-one">
          <div className="bubble-one"></div>
          <div className="bubble-two"></div>
          <div className="bubble-three"></div>
          <div className="bubble-four"></div>
          <div className="bubble-five"></div>
          <div className="bubble-six"></div>
        </div>
        {/* /.fancy-hero-one */}
        <div className="pricing-table-area">
          <img
            src="images/shape/62.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src="images/shape/63.svg"
            alt="shape"
            className="shapes shape-two"
          />
          <div className="container">
            <div className="tab-content">
              <ExperimentLevel />
            </div>
          </div>
          {/* End .container */}
        </div>
      </div>
      {/* /.pricing-section-one */}

    </div>
  );
};

export default Experiment;
