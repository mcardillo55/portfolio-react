import React from 'react';
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
                    <h6>Programming Languages</h6>
                    <ul>
                        <li>Python, JavaScript/Node.JS</li>
                        <li>C, C++</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </Col>
                <Col sm={6}>
                    <h6>Web Frameworks</h6>
                    <ul>
                        <li>Flask</li>
                        <li>Django</li>
                        <li>Bootstrap</li>
                        <li>Express</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <h6>Databases</h6>
                    <ul>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>SQLite</li>
                    </ul>
                </Col>
                <Col sm={6}>
                    <h6>Operating Systems</h6>
                    <ul>
                        <li>GNU/Linux</li>
                        <li>Mac OS X</li>
                        <li>Windows</li>
                    </ul>
                </Col>
            </Row>
        </div>
    </div>
  )
};

export default ExperienceSection;