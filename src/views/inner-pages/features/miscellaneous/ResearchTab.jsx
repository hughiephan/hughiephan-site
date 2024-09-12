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
            {research.paper &&
                <div className={getClassName(research, "research-tab", "paper")}>
                    <img style={{ paddingRight: "5px", width: "30px" }} src="images/icon/144.svg" alt="media" />
                    <div className="content">
                        <a href={research.paper}>Paper</a>
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


            {!research.git &&
                <div className={getClassName(research, "default-research-tab", "git")}>
                    <div className="content">
                        Github
                    </div>
                </div>
            }
            {research.git &&
                <div className={getClassName(research, "research-tab", "git")}>
                    <i className="fa fa-github"></i>
                    <div className="content">
                        <a href={research.git}>Github</a>
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
            {research.format != "presentationList" && research.presentation &&
                <div className={getClassName(research, "research-tab", "presentation")}>
                    <img style={{ opacity: "85%", paddingRight: "5px", width: "30px" }} src="images/icon/209.svg" alt="media" />
                    <div className="content">
                        <a href={research.presentation}>Presentation</a>
                    </div>
                </div>
            }

            {research.format == "presentationList" && research.presentationList &&
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


            {!research.demo &&
                <div className={getClassName(research, "default-research-tab", "demo")}>
                    <div className="content">
                        Demo
                    </div>
                </div>
            }
            {research.demo &&
                <div className={getClassName(research, "research-tab", "demo")}>
                    <i className="fa fa-tablet"></i>
                    <div className="content">
                        <a href={research.demo}>Demo</a>
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
            {research.report &&
                <div className={getClassName(research, "research-tab", "report")}>
                    <i className="fa fa-pencil-square-o"></i>
                    <div className="content">
                        <a href={research.report}>Report</a>
                    </div>
                </div>
            }


            {/* etc */}
            {research.competition &&
                <div className="research-tab">
                    <img style={{ opacity: "50%", paddingRight: "5px", width: "30px" }} src="images/icon/211.svg" alt="media" />
                    <div className="content">
                        <a>Event ({research.competition})</a>
                    </div>
                </div>
            }
            {research.conference &&
                <div className="research-tab">
                    <img style={{ paddingRight: "5px", width: "30px" }} src="images/icon/210.svg" alt="media" />
                    <div className="content">
                        <a>Conference ({research.conference})</a>
                    </div>
                </div>
            }
            {research.journal &&
                <div className="research-tab">
                    <img style={{ opacity: "70%", paddingRight: "5px", width: "30px" }} src="images/icon/213.svg" alt="media" />
                    <div className="content">
                        <a>Journal ({research.journal})</a>
                    </div>
                </div>
            }
            {research.talk &&
                <div className="research-tab">
                    <img style={{ opacity: "60%", paddingRight: "5px", width: "30px" }} src="images/icon/212.svg" alt="media" />
                    <div className="content">
                        <a>{research.talk}</a>
                    </div>
                </div>
            }
            {research.priority &&
                <div className="research-tab">
                    <img style={{ paddingRight: "5px", width: "30px" }} src="images/icon/40.svg" alt="media" />
                    <div className="content">
                        <a>Recommend Joining</a>
                    </div>
                </div>
            }
            {research.experiment &&
                <div className="research-tab">
                    <img style={{ paddingRight: "5px", width: "30px" }} src="images/icon/26.svg" alt="media" />
                    <div className="content">
                        <Link to={`/experiment/${research.experiment.id}/${research.title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-')}`}> Experiment </Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default ResearchTab;