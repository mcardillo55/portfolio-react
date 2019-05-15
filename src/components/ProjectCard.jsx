import React from 'react';
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const ProjectCard = (props) => {
    return(
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
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
            <Card.Body className="text-center">
                <Button className="mx-3" href={props.source_link} disabled={!props.source_link}>Source</Button>
                <Button className="mx-3" href={props.demo_link} disabled={!props.demo_link}>Demo</Button>
            </Card.Body>
        </Card>
    )
};

export default ProjectCard;