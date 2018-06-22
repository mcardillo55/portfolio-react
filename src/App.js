import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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
      <div class="container" id="page-wrap">
        <Link to='/'>
          <NameHeader />
        </Link>
        <CircleButtons />
        <Route path='/(experience|projects)' render={props=><hr/>} />
        <div class="container" >
          <div class="col-md-1-offset col-md-10 col-md-offset-1" id="content">
            <Route path='/experience' component={ExperienceSection} />
            <Route path='/projects' component={ProjectsSection} />
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
    );
  }
}

export default App;
