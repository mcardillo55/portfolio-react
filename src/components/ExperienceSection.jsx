import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import CiscoLogo from '../images/cisco_logo.png';
import PSULogo from '../images/psu_logo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

const ExperienceSection = () => {
  return(
    <div id="experience">
        <div id="professional">
            <h3>Professional</h3>
            <div className="job">
                <Row>
                    <Col xs={2}>
                        <Image className="heading-image" src={CiscoLogo} alt="Cisco Logo" fluid/>
                    </Col>
                    <Col xs={10}>
                        <h4>Cisco Systems</h4>
                        <h5>San Jose, CA</h5>
                    </Col>
                </Row>
                <h6 className="job-title">Software Engineer - September 2011 to September 2016</h6>
                <ul className="job-roles">
                    <li>Delivered platform-independent base operating system to platform teams</li>
                    <li>Merged and synced quarterly drop of upstream patches to Linux and FOSS application</li>
                    <li>Patched critical open source vulnerabilities immediately (e.g. Heartbleed)</li>
                    <li>Implemented features such as system page and challenge-response mechanism</li>
                </ul>
                <h6 className="job-title">CDO Choice Intern - May 2010 to August 2010</h6>
                <ul className="job-roles">
                    <li>Wrote Perl scripts to perform common source code management tasks (e.g. counting lines of code in codebase, determining which ClearCase component contains a given file)</li>
                </ul>
            </div>
        </div>

        <div id="education">
            <h3>Education</h3>
            <Row>
                <Col xs={2}>
                    <Image className="heading-image" src={PSULogo} alt="Penn State Logo" fluid/>
                </Col>
                <Col xs={7}>
                    <h5>Pennsylvania State University</h5>
                    <h6>B.S. Computer Engineering, June 2011</h6>
                </Col>
            </Row>
        </div>

        <div id="skills">
            <h3>Technical Skills</h3>
            <Row>
                <Col sm={6}>
                    <h6 className="my-3">Programming Languages</h6>
                    <ListGroup>
                        <ListGroup.Item>Python, JavaScript/Node.JS</ListGroup.Item>
                        <ListGroup.Item>C, C++</ListGroup.Item>
                        <ListGroup.Item>HTML</ListGroup.Item>
                        <ListGroup.Item>CSS</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={6}>
                    <h6 className="my-3">Web Frameworks</h6>
                    <ListGroup>
                        <ListGroup.Item>Flask</ListGroup.Item>
                        <ListGroup.Item>Django</ListGroup.Item>
                        <ListGroup.Item>Bootstrap</ListGroup.Item>
                        <ListGroup.Item>Express</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <h6 className="my-3">Databases</h6>
                    <ListGroup>
                        <ListGroup.Item>MongoDB</ListGroup.Item>
                        <ListGroup.Item>MySQL</ListGroup.Item>
                        <ListGroup.Item>SQLite</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={6}>
                    <h6 className="my-3">Operating Systems</h6>
                    <ListGroup>
                        <ListGroup.Item>GNU/Linux</ListGroup.Item>
                        <ListGroup.Item>Mac OS X</ListGroup.Item>
                        <ListGroup.Item>Windows</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    </div>
  )
};

export default ExperienceSection;