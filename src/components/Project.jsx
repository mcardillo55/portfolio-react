import React from 'react';

const Project = (props) => {
    let title;
    if (props.title) {
            if (props.link) {
                title = <a href={props.link}>{props.title}</a>;
            } else {
                title = props.title
            }
                    
    }
    return(
        <div className="project">
            <h6>{title}{title && " - "}{props.description} ({props.stack}) - {props.years}</h6>
            <ul>

                {props.tasks.map(function(task) {
                    return <li dangerouslySetInnerHTML={{__html: task}} />
                })}
            </ul>
        </div>
    )
};

export default Project;