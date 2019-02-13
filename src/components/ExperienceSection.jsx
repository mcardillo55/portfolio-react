import React from 'react';
import CiscoLogo from '../images/cisco_logo.png';
import PSULogo from '../images/psu_logo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

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
                <h6 className="job-title">Software Engineer - Kernel - September 2011 to September 2016</h6>
                <ul className="job-roles">
                    <li>Implemented prctl system calls to allow userspace code direct access to system page data, greatly reducing the amount of CPU context switching required for common tasks</li>
                    <li>Automated quarterly merge and sync process of thousands of upstream Linux and FOSS patches into internal mainline kernel branch, reducing sync time from a week to 3 days</li>
                    <li>Integrated Yocto embedded Linux environment into IOS-XE operating system, enabling platform independent support for many routing and switching platforms</li>
                    <li>Enforced exclusive write or execute policy on all data segments, hardening systems against common overflow attacks</li>
                    <li>Patched critical open source vulnerabilities with a short turnaround time</li>
                </ul>
                <h6 className="job-title">CDO Choice Intern - May 2010 to August 2010</h6>
                <ul className="job-roles">
                    <li>Wrote several scripts in Perl to perform common source code management tasks, such as counting the total number of lines in a codebase, or determining which ClearCase component contained a given file</li>
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
                        <li>Python, C, C++, Java</li>
                        <li>HTML, JavaScript, CSS</li>
                    </ul>
                </Col>
                <Col sm={6}>
                    <h6>Web Frameworks</h6>
                    <ul>
                        <li>Flask</li>
                        <li>Django</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <h6>Databases</h6>
                    <ul>
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