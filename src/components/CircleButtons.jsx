import React from 'react';
import Circle from '../components/Circle';
import SmallNav from '../components/SmallNav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-scroll';

const CircleButtons = (props) => {
    return (
      <Container>
        <Row>
          <Col sm={{span: 7, offset:2}} md={{span:8, offset: 2}}>
            <Row id="circle-wrapper" className="text-center">
              <Col xs="12" md="4">
                <Link className="circle-link" to="experience" spy={true} smooth={true} duration={500} onClick={props.onClick}>
                  <Circle circleText="Experience" faIcon="fa-briefcase" id="experience-btn"/>
                  <SmallNav faIcon="fa-briefcase" text="Experience"/>
                </Link>
              </Col>
              <Col xs="12" md="4">
                <Link className="circle-link" to="projects" spy={true} smooth={true} duration={500} onClick={props.onClick}>
                  <Circle circleText="Projects" faIcon="fa-cog" id="projects-btn"/>
                  <SmallNav faIcon="fa-cog" text="Projects"/>
                </Link>
              </Col>
              <Col xs="12" md="4">
                <a className="circle-link" href="https://github.com/mcardillo55">
                  <Circle circleText="GitHub" faIcon="fa-github" id="github-btn"/>
                  <SmallNav faIcon="fa-github" text="GitHub"/>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
}

export default CircleButtons;