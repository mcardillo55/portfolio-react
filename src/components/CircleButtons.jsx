import React from 'react';
import { NavLink } from 'react-router-dom';
import Circle from '../components/Circle';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

const CircleButtons = () => {
    return (
      <Row>
        <Container>
          <Row>
            <Container>
              <Col sm={{span:8, offset:2}}>
                <Row id="circle-wrapper" className="text-center">
                  <Col sm={4}>
                    <NavLink className="circle-link" activeClassName="circle-link-active" to="/experience">
                      <Circle circleText="Experience" faIcon="fa-briefcase" id="experience-btn"/>
                    </NavLink>
                  </Col>
                  <Col sm={4}>
                    <NavLink className="circle-link" activeClassName="circle-link-active" to="/projects">
                      <Circle circleText="Projects" faIcon="fa-cog" id="projects-btn"/>
                    </NavLink>
                    </Col>
                  <Col sm={4}>
                    <a className="circle-link" href="https://github.com/mcardillo55">
                      <Circle circleText="GitHub" faIcon="fa-github" id="github-btn"/>
                    </a>
                    </Col>
                </Row>
              </Col>
            </Container>
          </Row>
        </Container>
      </Row>
    );
}

export default CircleButtons;