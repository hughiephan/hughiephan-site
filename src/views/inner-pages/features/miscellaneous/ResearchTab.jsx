import React from 'react';
import './ResearchTab.css';

const ResearchTab = (props) => {
    const { research } = props;

    return (
        <div className="research-tab-container">
            {research.proposal &&
                <div className="research-tab">
                    <i className="fa fa-file-o"></i>
                    <div className="content">
                        <a href={research.proposal}>Proposal</a>
                    </div>
                </div>
            }
            {research.presentation &&
                <div className="research-tab">
                    <i className="fa fa-file-pdf-o"></i>
                    <div className="content">
                        <a>Presentation</a>
                    </div>
                </div>
            }
            {research.report &&
                <div className="research-tab">
                    <i className="fa fa-pencil-square-o"></i>
                    <div className="content">
                        <a href={research.report}>Report</a>
                    </div>
                </div>
            }
            {research.notebook &&
                <div className="research-tab">
                    <i className="fa fa-folder-o"></i>
                    <div className="content">
                        <a>Notebook</a>
                    </div>
                </div>
            }
            {research.dataset &&
                <div className="research-tab">
                    <i className="fa fa-database"></i>
                    <div className="content">
                        <a>Dataset</a>
                    </div>
                </div>
            }
            {research.git &&
                <div className="research-tab">
                    <i className="fa fa-github"></i>
                    <div className="content">
                        <a href={research.git}>Github</a>
                    </div>
                </div>
            }
            {research.paper &&
                <div className="research-tab">
                    <i className="fa fa-book"></i>
                    <div className="content">
                        <a href={research.paper}>Paper</a>
                    </div>
                </div>}
            {research.demo &&
                <div className="research-tab">
                    <i className="fa fa-play-circle"></i>
                    <div className="content">
                        <a>Demo</a>
                    </div>
                </div>}
        </div>
    );
};

export default ResearchTab;