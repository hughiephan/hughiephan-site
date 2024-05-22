import React from 'react';
import { Link } from 'react-router-dom';
import { OrganizationChart } from 'primereact/organizationchart';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';

const LearningPath = (props) => {
    const customStyles = {
        "--bs-card-border-color": 'unset',
        "--bs-card-bg": 'unset',
    };
    const { learningPath } = props;

    const customNodeTemplate = (node) => {
        if (node.lesson || node.lesson == 0) return <Link to={`/lesson/${node.lesson}`}> Lesson: {node.label} </Link>
        if (node.tutorial || node.tutorial == 0) return <Link to={`/tutorial/${node.tutorial}`}> Tutorial: {node.label} </Link>
        if (node.lab || node.lab == 0) return <Link to={`/assignment/${node.lab}`}> Lab: {node.label} </Link>
        if (node.project || node.project == 0) return <Link to={`/assignment/${node.project}`}> Project: {node.label} </Link>
        if (node.link && node.type && node.type.toLowerCase() == 'kaggle') return (
            <div>
                <img height="20" src="https://www.kaggle.com/static/images/logos/kaggle-logo-transparent-300.png" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                <a href={node.link} style={{ verticalAlign: 'middle', marginLeft: '8px' }}>
                    {node.label}
                </a>
            </div>
        )
        if (node.link && node.type && node.type.toLowerCase() == 'colab') return (
            <div>
                <img height="20" src="https://colab.research.google.com/img/colab_favicon_256px.png" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
                <a href={node.link} style={{ verticalAlign: 'middle', marginLeft: '8px' }}>
                    {node.label}
                </a>
            </div>
        )
        if (node.link && node.type && node.type.toLowerCase() == 'github') return (
            <div>
                <i className="fa fa-git"> </i> {" "}
                <a href={node.link}> {node.label} </a>
            </div>
        )
        if (node.link && node.type && node.type.toLowerCase() == 'paper') return (
            <div>
                <i className="fa fa-book"> </i> {" "}
                <a href={node.link}> {node.label} </a>
            </div>
        )
        if (node.link && node.type && node.type.toLowerCase() == 'medium') return (
            <div>
                <i className="fa fa-medium"> </i> {" "}
                <a href={node.link}> {node.label} </a>
            </div>
        )
        if (node.link && node.type && node.type.toLowerCase() == 'youtube') return (
            <div>
                <i className="fa fa-youtube-play"> </i> {" "}
                <a href={node.link}> {node.label} </a>
            </div>
        )
        if (node.link) return (
            <div>
                <a href={node.link}> {node.label} </a>
            </div>
        )
        return node.label
    };

    return (
        <div style={customStyles} className="card overflow-x-auto">
            <OrganizationChart value={[learningPath]} nodeTemplate={customNodeTemplate} />
        </div>
    )
}

export default LearningPath;