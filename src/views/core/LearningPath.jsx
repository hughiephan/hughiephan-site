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
        if (node.link) return <a href={node.link}> {node.label} </a>
        return node.label
    };
    
    // const customNodeTemplate = (node) => {
    //     if (node.type === 'person') {
    //         return (
    //             <div className="flex flex-column">
    //                 <div className="flex flex-column align-items-center">
    //                     <img alt={node.data.name} src={node.data.image} className="mb-3 w-3rem h-3rem" />
    //                     <span className="font-bold mb-2">{node.data.name}</span>
    //                     <span>{node.data.title}</span>
    //                 </div>
    //             </div>
    //         );
    //     }

    //     return node.label;
    // };

    return (
        <div style={customStyles} className="card overflow-x-auto">
          <OrganizationChart value={[learningPath]} nodeTemplate={customNodeTemplate} />
        </div>
    )
}

export default LearningPath;