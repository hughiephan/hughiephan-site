import React from 'react';
import { Link } from "react-router-dom";
import './ResearchTab.css';

function getClassName(research, className, properties) {
    if (research.done.includes(properties)) {
        className += " research-tab-done";
    } else if (research.todo.includes(properties)) {
        className += " research-tab-todo";
    }
    return className;
}

const ResearchTab = (props) => {
    const [showImage, setShowImage] = React.useState(false);
    let { research } = props;
    if (!research.todo) {
        research = {
            ...research,
            todo: ""
        };
    }
    if (!research.done) {
        research = {
            ...research,
            done: ""
        };
    }
    if (!research.format) {
        research = {
            ...research,
            format: ""
        };
    }
    
    return (
        <div className="research-tab-container">
            {!research.proposal &&
                <div className={getClassName(research, "default-research-tab", "proposal")}>
                    <div className="content">
                        Proposal
                    </div>
                </div>
            }
            {research.proposal &&
                <div className={getClassName(research, "research-tab", "proposal")}>
                    <img style={{ paddingRight: "5px", width: "30px" }} src="images/icon/190.svg" alt="media" />
                    <div className="content">
                        <a href={research.proposal}>Proposal</a>
                    </div>
                </div>
            }


            {!research.paper &&
                <div className={getClassName(research, "default-research-tab", "paper")}>
                    <div className="content">
                        Paper
                    </div>
                </div>
            }
            {!research.format.includes("paperList") && research.paper &&
                <div className={getClassName(research, "research-tab", "paper")}>
                    <img style={{ paddingRight: "5px", width: "30px" }} src="images/icon/144.svg" alt="media" />
                    <div className="content">
                        <a href={research.paper}>Paper</a>
                    </div>
                </div>
            }
            {research.format.includes("paperList") && research.paperList &&
                <div className={getClassName(research, "research-tab", "paper")}>
                    <i className="fa fa-pencil-square-o"></i>
                    <div className="content">
                        <nav className="navbar">
                            <li style={{ listStyleType: "none" }} className="dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                                    Paper
                                </a>
                                <ul className="dropdown-menu">
                                    {research.paperList.map((p, index) => (
                                        <li key={index} style={{ listStyleType: "none" }}>
                                            <a href={p.url}> {p.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </nav>
                    </div>
                </div>
            }



            {!research.notebook &&
                <div className={getClassName(research, "default-research-tab", "notebook")}>
                    <div className="content">
                        Notebook
                    </div>
                </div>
            }
            {research.notebook &&
                <div className={getClassName(research, "research-tab", "notebook")}>
                    <i className="fa fa-code-fork"></i>
                    <div className="content">
                        <a href={research.notebook}>Notebook</a>
                    </div>
                </div>
            }


            {!research.git && !research.format.includes("gitList") &&
                <div className={getClassName(research, "default-research-tab", "git")}>
                    <div className="content">
                        Github
                    </div>
                </div>
            }
            {!research.format.includes("gitList") && research.git &&
                <div className={getClassName(research, "research-tab", "git")}>
                    <i className="fa fa-github"></i>
                    <div className="content">
                        <a href={research.git}>Github</a>
                    </div>
                </div>
            }
            {research.format.includes("gitList") && research.gitList &&
                <div className={getClassName(research, "research-tab", "git")}>
                    <i className="fa fa-github"></i>
                    <div className="content">
                        <nav className="navbar">
                            <li style={{ listStyleType: "none" }} className="dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                                    Github
                                </a>
                                <ul className="dropdown-menu">
                                    {research.gitList.map((git, index) => (
                                        <li key={index} style={{ listStyleType: "none" }}>
                                            <a href={git.url}>{git.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </nav>
                    </div>
                </div>
            }


            {!research.dataset &&
                <div className={getClassName(research, "default-research-tab", "dataset")}>
                    <div className="content">
                        Dataset
                    </div>
                </div>
            }
            {research.dataset &&
                <div className={getClassName(research, "research-tab", "dataset")}>
                    <i className="fa fa-database"></i>
                    <div className="content">
                        <a href={research.dataset}>Dataset</a>
                    </div>
                </div>
            }

            {!research.video &&
                <div className={getClassName(research, "default-research-tab", "video")}>
                    <div className="content">
                        Video
                    </div>
                </div>
            }
            {research.video &&
                <div className={getClassName(research, "research-tab", "video")}>
                    <i style={{ opacity: "95%" }} className="fa fa-play-circle"></i>
                    <div className="content">
                        <a href={research.video}>Video</a>
                    </div>
                </div>
            }




            {!research.presentation &&
                <div className={getClassName(research, "default-research-tab", "presentation")}>
                    <div className="content">
                        Presentation
                    </div>
                </div>
            }
            {!research.format.includes("presentationList") && research.presentation &&
                <div className={getClassName(research, "research-tab", "presentation")}>
                    <img style={{ opacity: "85%", paddingRight: "5px", width: "30px" }} src="images/icon/209.svg" alt="media" />
                    <div className="content">
                        <a href={research.presentation}>Presentation</a>
                    </div>
                </div>
            }

            {research.format.includes("presentationList") && research.presentationList &&
                <div className={getClassName(research, "research-tab", "presentation")}>
                    <img style={{ opacity: "85%", paddingRight: "5px", width: "30px" }} src="images/icon/209.svg" alt="media" />
                    <div className="content">
                        <nav className="navbar">
                            <li style={{ listStyleType: "none" }} className="dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                                    Presentation
                                </a>
                                <ul className="dropdown-menu">
                                    {research.presentationList.map((p, index) => (
                                        <li key={index} style={{ listStyleType: "none" }}>
                                            <a href={p.url}> {p.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </nav>
                    </div>
                </div>
            }

            {!research.report &&
                <div className={getClassName(research, "default-research-tab", "report")}>
                    <div className="content">
                        Report
                    </div>
                </div>
            }
            {!research.format.includes("reportList") && research.report &&
                <div className={getClassName(research, "research-tab", "report")}>
                    <i className="fa fa-pencil-square-o"></i>
                    <div className="content">
                        <a href={research.report}>Report</a>
                    </div>
                </div>
            }
            {research.format.includes("reportList") && research.reportList &&
                <div className={getClassName(research, "research-tab", "report")}>
                    <i className="fa fa-pencil-square-o"></i>
                    <div className="content">
                        <nav className="navbar">
                            <li style={{ listStyleType: "none" }} className="dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                                    Report
                                </a>
                                <ul className="dropdown-menu">
                                    {research.reportList.map((p, index) => (
                                        <li key={index} style={{ listStyleType: "none" }}>
                                            <a href={p.url}> {p.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </nav>
                    </div>
                </div>
            }

            {/* etc */}
            {research.competition &&
                <div className={getClassName(research, "research-tab", "competition")}>
                    <img style={{ opacity: "50%", paddingRight: "5px", width: "30px" }} src="images/icon/211.svg" alt="media" />
                    <div className="content">
                        <a>Event ({research.competition})</a>
                    </div>
                </div>
            }
            {research.conference &&
                <div className={getClassName(research, "research-tab", "conference")}>
                    <img style={{ paddingRight: "5px", width: "30px" }} src="images/icon/210.svg" alt="media" />
                    <div className="content">
                        <a>Conference ({research.conference})</a>
                    </div>
                </div>
            }
            {research.journal &&
                <div className={getClassName(research, "research-tab", "journal")}>
                    <img style={{ opacity: "70%", paddingRight: "5px", width: "30px" }} src="images/icon/213.svg" alt="media" />
                    <div className="content">
                        <a>Journal ({research.journal})</a>
                    </div>
                </div>
            }
            {research.talk &&
                <div className={getClassName(research, "research-tab", "talk")}>
                    <img style={{ opacity: "60%", paddingRight: "5px", width: "30px" }} src="images/icon/212.svg" alt="media" />
                    <div className="content">
                        <a>{research.talk}</a>
                    </div>
                </div>
            }
            {research.priority &&
                <div className={getClassName(research, "research-tab", "priority")}>
                    <img style={{ paddingRight: "5px", width: "30px" }} src="images/icon/40.svg" alt="media" />
                    <div className="content">
                        <a>Recommend Joining</a>
                    </div>
                </div>
            }
            
            {!research.format.includes("experimentUrlList") && research.experimenturl &&
                <div className={getClassName(research, "research-tab", "experiment")}>
                    <img style={{ paddingRight: "5px", width: "30px" }} src="images/icon/26.svg" alt="media" />
                    <div className="content">
                        <a href={research.experimenturl}>Experiment</a>
                    </div>
                </div>
            }
            {!research.experimenturl && !research.format.includes("experimentUrlList") &&
                <div className={getClassName(research, "default-research-tab", "experiment")}>
                    <div className="content">
                        Experiment
                    </div>
                </div>
            }
            {research.format.includes("experimentUrlList") && research.experimentUrlList &&
                <div className={getClassName(research, "research-tab", "experiment")}>
                    <img style={{ paddingRight: "5px", width: "30px" }} src="images/icon/26.svg" alt="media" />
                    <div className="content">
                        <nav className="navbar">
                            <li style={{ listStyleType: "none" }} className="dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                                    Experiment
                                </a>
                                <ul className="dropdown-menu">
                                    {research.experimentUrlList.map((exp, index) => (
                                        <li key={index} style={{ listStyleType: "none" }}>
                                            <a href={exp.url}>{exp.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </nav>
                    </div>
                </div>
            }
            {/* {research.experiment &&
                <div className={getClassName(research, "research-tab", "experiment")}>
                    <img style={{ paddingRight: "5px", width: "30px" }} src="images/icon/26.svg" alt="media" />
                    <div className="content">
                        <Link to={`/experiment/${research.experiment.id}/${research.title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-')}`}> Experiment </Link>
                    </div>
                </div>
            } */}
            {research.news &&
                <div className={getClassName(research, "research-tab", "news")}>
                    <img style={{ paddingRight: "5px", width: "30px" }} src="images/icon/108.svg" alt="media" />
                    <div className="content">
                        <a href={research.news}>News</a>
                    </div>
                </div>
            }
            {research.doi &&
                <div className={getClassName(research, "research-tab", "doi")}>
                    <img style={{ paddingRight: "5px", width: "30px" }} src="images/icon/67.svg" alt="media" />
                    <div className="content">
                        <a href={research.doi}>Doi</a>
                    </div>
                </div>
            }


            {!research.demo &&
                <div className={getClassName(research, "default-research-tab", "demo")}>
                    <div className="content">
                        Demo
                    </div>
                </div>
            }
            {research.demo &&
                <div className={getClassName(research, "research-tab", "demo")}>
                    <img style={{ paddingBottom: "5px", paddingRight: "5px", width: "30px" }} src="images/icon/29.svg" alt="media" />
                    <div className="content">
                        <a href={research.demo}>Demo</a>
                    </div>
                </div>
            }

            {research.image &&
                <div className={getClassName(research, "research-tab", "image")}>
                    <div className="content">
                        <img style={{ maxWidth: "550px" }} src={research.image} />
                    </div>
                </div>
            }

            {research.imageButton &&
                <div className={getClassName(research, "research-tab", "image")}>
                    <div onClick={() => setShowImage(prev => !prev)} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
                        <img style={{ paddingRight: "5px", width: "30px" }} src="images/icon/116.svg" alt="media" />
                        <span>Image</span>
                    </div>
                    {showImage && (
                        <div className="content">
                            <img style={{ maxWidth: "550px" }} src={research.imageButton} />
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default ResearchTab;