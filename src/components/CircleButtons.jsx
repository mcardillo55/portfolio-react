import React from 'react';
import { Link } from 'react-router-dom';
import Circle from '../components/Circle';

const CircleButtons = () => {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-2"/>
          <div class="col-sm-8 container">
            <div class="row text-center" id="circle-wrapper">
              <div class="col-sm-4">
                <Link class="nounderline" to="/experience">
                  <Circle circleText="Experience" faIcon="fa-briefcase" id="experience-btn"/>
                </Link>
              </div>
              <div class="col-sm-4">
                <Link class="nounderline" to="/projects">
                  <Circle circleText="Projects" faIcon="fa-cog" id="projects-btn"/>
                </Link>
              </div>
              <div class="col-sm-4">
                <a class="nounderline" href="https://github.com/mcardillo55">
                  <Circle circleText="GitHub" faIcon="fa-github" id="github-btn"/>
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-2"/>
        </div>
      </div>
    );
}

export default CircleButtons;