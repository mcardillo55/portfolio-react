import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import NameHeader from './components/NameHeader';
import CircleButtons from './components/CircleButtons';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import FooterSection from './components/FooterSection';

class App extends Component {
  render() {
    return (
    <div>
      <div className="container" id="page-wrap">
        <NavLink id="name-link" to='/'>
          <NameHeader />
        </NavLink>
        <CircleButtons />
        <div className="row">
          <div className="col-md-12">
            <Route path='/(experience|projects)' render={props=><hr/>} />
          </div>
        </div>
        <div className="row" >
          <div className="container">
            <div className="col-md-1-offset col-md-10 col-md-offset-1" id="content">
              <Route path='/experience' component={ExperienceSection} />
              <Route path='/projects' component={ProjectsSection} />
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
    );
  }
}

export default App;
