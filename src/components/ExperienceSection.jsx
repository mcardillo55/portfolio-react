import React from 'react';

const ExperienceSection = () => {
  return(
    <div id="experience">
        <div id="professional">
            <h2>Professional</h2>
            <div className="job">
                <h3>Cisco Systems</h3>
                <h5>San Jose, CA</h5>
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
            Bachelor of Science in Computer Engineering, June 2011<br/>
            Pennsylvania State University<br/><br/>
        </div>

        <div id="skills">
            <h2>Technical Skills</h2>
            <div className="row">
                <div className="col-sm-6">
                    <h4>Programming Languages</h4>
                    <ul>
                        <li>Python, C, C++, Java</li>
                        <li>HTML, JavaScript, CSS</li>
                    </ul>
                </div>
                <div className="col-sm-6">
                    <h4>Web Frameworks</h4>
                    <ul>
                        <li>Flask</li>
                        <li>Django</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <h4>Databases</h4>
                    <ul>
                        <li>MySQL</li>
                        <li>SQLite</li>
                    </ul>
                </div>
                <div className="col-sm-6">
                    <h4>Operating Systems</h4>
                    <ul>
                        <li>GNU/Linux</li>
                        <li>Mac OS X</li>
                        <li>Windows</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
};

export default ExperienceSection;