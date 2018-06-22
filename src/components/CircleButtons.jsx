import React from 'react';
import { NavLink } from 'react-router-dom';
import Circle from '../components/Circle';

const CircleButtons = () => {
    return (
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col-sm-2"/>
            <div className="col-sm-8 container">
              <div className="row text-center" id="circle-wrapper">
                <div className="col-sm-4">
                  <NavLink className="circle-link" activeClassName="circle-link-active" to="/experience">
                    <Circle circleText="Experience" faIcon="fa-briefcase" id="experience-btn"/>
                  </NavLink>
                </div>
                <div className="col-sm-4">
                  <NavLink className="circle-link" activeClassName="circle-link-active" to="/projects">
                    <Circle circleText="Projects" faIcon="fa-cog" id="projects-btn"/>
                  </NavLink>
                </div>
                <div className="col-sm-4">
                  <a className="circle-link" href="https://github.com/mcardillo55">
                    <Circle circleText="GitHub" faIcon="fa-github" id="github-btn"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-2"/>
          </div>
        </div>
      </div>
    );
}

export default CircleButtons;