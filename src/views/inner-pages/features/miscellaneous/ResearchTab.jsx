import React from 'react';
import './ResearchTab.css';

const ResearchTab = (props) => {
    let { research } = props;
    if (!research.todo) {
        research = {
            ...research,
            todo: ""
        };
    }

    return (
        <div className="research-tab-container">
            {!research.proposal &&
                <div className={research.todo.includes("proposal") ? "research-tab-todo default-research-tab" : "default-research-tab"}>
                    <div className="content">
                        Proposal
                    </div>
                </div>
            }
            {research.proposal &&
                <div className={research.todo.includes("proposal") ? "research-tab-todo research-tab" : "research-tab"}>
                    <i className="fa fa-sticky-note-o"></i>
                    <div className="content">
                        <a href={research.proposal}>Proposal</a>
                    </div>
                </div>
            }


            {!research.presentation &&
                <div className={research.todo.includes("presentation") ? "research-tab-todo default-research-tab" : "default-research-tab"}>
                    <div className="content">
                        Presentation
                    </div>
                </div>
            }
            {research.presentation &&
                <div className={research.todo.includes("presentation") ? "research-tab-todo research-tab" : "research-tab"}>
                    <i className="fa fa-file-pdf-o"></i>
                    <div className="content">
                        <a>Presentation</a>
                    </div>
                </div>
            }


            {!research.report &&
                <div className={research.todo.includes("report") ? "research-tab-todo default-research-tab" : "default-research-tab"}>
                    <div className="content">
                        Report
                    </div>
                </div>
            }
            {research.report &&
                <div className={research.todo.includes("report") ? "research-tab-todo research-tab" : "research-tab"}>
                    <i className="fa fa-pencil-square-o"></i>
                    <div className="content">
                        <a href={research.report}>Report</a>
                    </div>
                </div>
            }


            {!research.notebook &&
                <div className={research.todo.includes("notebook") ? "research-tab-todo default-research-tab" : "default-research-tab"}>
                    <div className="content">
                        Notebook
                    </div>
                </div>
            }
            {research.notebook &&
                <div className={research.todo.includes("notebook") ? "research-tab-todo research-tab" : "research-tab"}>
                    <i className="fa fa-code-fork"></i>
                    <div className="content">
                        <a href={research.notebook}>Notebook</a>
                    </div>
                </div>
            }


            {!research.dataset &&
                <div className={research.todo.includes("dataset") ? "research-tab-todo default-research-tab" : "default-research-tab"}>
                    <div className="content">
                        Dataset
                    </div>
                </div>
            }
            {research.dataset &&
                <div className={research.todo.includes("dataset") ? "research-tab-todo research-tab" : "research-tab"}>
                    <i className="fa fa-database"></i>
                    <div className="content">
                        <a href={research.dataset}>Dataset</a>
                    </div>
                </div>
            }


            {!research.git &&
                <div className={research.todo.includes("git") ? "research-tab-todo default-research-tab" : "default-research-tab"}>
                    <div className="content">
                        Github
                    </div>
                </div>
            }
            {research.git &&
                <div className={research.todo.includes("git") ? "research-tab-todo research-tab" : "research-tab"}>
                    <i className="fa fa-github"></i>
                    <div className="content">
                        <a href={research.git}>Github</a>
                    </div>
                </div>
            }


            {!research.paper &&
                <div className={research.todo.includes("paper") ? "research-tab-todo default-research-tab" : "default-research-tab"}>
                    <div className="content">
                        Paper
                    </div>
                </div>
            }
            {research.paper &&
                <div className={research.todo.includes("paper") ? "research-tab-todo research-tab" : "research-tab"}>
                    <i className="fa fa-book"></i>
                    <div className="content">
                        <a href={research.paper}>Paper</a>
                    </div>
                </div>
            }


            {!research.demo &&
                <div className={research.todo.includes("demo") ? "research-tab-todo default-research-tab" : "default-research-tab"}>
                    <div className="content">
                        Demo
                    </div>
                </div>
            }
            {research.demo &&
                <div className={research.todo.includes("demo") ? "research-tab-todo research-tab" : "research-tab"}>
                    <i className="fa fa-play-circle"></i>
                    <div className="content">
                        <a href={research.demo}>Demo</a>
                    </div>
                </div>
            }

            {research.priority &&
                <div className="default-research-tab">
                    <img style={{ paddingRight: "5px", width: "30px" }} src="images/icon/40.svg" alt="media" />
                    <div className="content">
                        <a>Recommend Joining</a>
                    </div>
                </div>
            }
        </div>
    );
};

export default ResearchTab;