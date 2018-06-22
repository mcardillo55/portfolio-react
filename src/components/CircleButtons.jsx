import React from 'react';
import { Link } from 'react-router-dom';
import Circle from '../components/Circle';

const CircleButtons = () => {
    return (
        <div class="row container text-center" id="circle-wrapper">
          <div class="col-sm-4">
            <Link to="/experience">
              <Circle circleText="Experience" faIcon="fa-briefcase" id="experience-btn"/>
            </Link>
          </div>
          <div class="col-sm-4">
            <Link to="/projects">
              <Circle circleText="Projects" faIcon="fa-cog" id="projects-btn"/>
            </Link>
          </div>
          <div class="col-sm-4">
            <a href="https://github.com/mcardillo55">
              <Circle circleText="GitHub" faIcon="fa-github" id="github-btn"/>
            </a>
          </div>
        </div>
    );
}

export default CircleButtons;