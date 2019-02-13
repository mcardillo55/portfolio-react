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
            <h2>Professional</h2>
            <div className="job">
                <Row>
                    <Col xs={2}>
                        <Image className="heading-image" src={CiscoLogo} alt="Cisco Logo" fluid/>
                    </Col>
                    <Col xs={10}>
                        <h3>Cisco Systems</h3>
                        <h5>San Jose, CA</h5>
                    </Col>
                </Row>
                    <h4 className="job-title">Software Engineer - Kernel - September 2011 to September 2016</h4>
                    <ul className="job-roles">
                        <li>Implemented prctl system calls to allow userspace code direct access to system page data, greatly reducing the amount of CPU context switching required for common tasks</li>
                        <li>Automated quarterly merge and sync process of thousands of upstream Linux and FOSS patches into internal mainline kernel branch, reducing sync time from a week to 3 days</li>
                        <li>Integrated Yocto embedded Linux environment into IOS-XE operating system, enabling platform independent support for many routing and switching platforms</li>
                        <li>Enforced exclusive write or execute policy on all data segments, hardening systems against common overflow attacks</li>
                        <li>Patched critical open source vulnerabilities with a short turnaround time</li>
                    </ul>
                <h4 className="job-title">CDO Choice Intern - May 2010 to August 2010</h4>
                <ul className="job-roles">
                    <li>Wrote several scripts in Perl to perform common source code management tasks, such as counting the total number of lines in a codebase, or determining which ClearCase component contained a given file</li>
                </ul>
            </div>
        </div>

        <div id="education">
            <h2>Education</h2>
            <Row>
                <Col xs={2}>
                    <Image className="heading-image" src={PSULogo} alt="Penn State Logo" fluid/>
                </Col>
                <Col xs={7}>
                    <h4>Pennsylvania State University</h4>
                    <h5>Bachelor of Science in Computer Engineering, June 2011</h5>
                </Col>
            </Row>
        </div>

        <div id="skills">
            <h2>Technical Skills</h2>
            <Row>
                <Col sm={6}>
                    <h4>Programming Languages</h4>
                    <ul>
                        <li>Python, C, C++, Java</li>
                        <li>HTML, JavaScript, CSS</li>
                    </ul>
                </Col>
                <Col sm={6}>
                    <h4>Web Frameworks</h4>
                    <ul>
                        <li>Flask</li>
                        <li>Django</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col sm={6}>
                    <h4>Databases</h4>
                    <ul>
                        <li>MySQL</li>
                        <li>SQLite</li>
                    </ul>
                </Col>
                <Col sm={6}>
                    <h4>Operating Systems</h4>
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