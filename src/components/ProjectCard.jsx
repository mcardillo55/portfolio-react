import React from 'react';
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const ProjectCard = (props) => {
    let title;
    if (props.title) {
            if (props.link) {
                title = <a href={props.link}>{props.title}</a>;
            } else {
                title = props.title
            }
                    
    }
    return(
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div>
                    {props.stack.map(function(technology) {
                        return <Badge pill className="mr-1" variant="primary">{technology}</Badge>
                    })}
                </div>
            </Card.Body>
            <ListGroup variant="flush">
                {props.tasks.map(function(task) {
                    return <ListGroup.Item dangerouslySetInnerHTML={{__html: task}} />
                })}
            </ListGroup>
        </Card>
    )
};

export default ProjectCard;