import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import NameHeader from './components/NameHeader';
import CircleButtons from './components/CircleButtons';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import FooterSection from './components/FooterSection';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends Component {
  render() {
    return (
    <div>
      <Container>
        <NavLink id="name-link" to='/'>
          <NameHeader />
        </NavLink>
        <CircleButtons />
        <Row>
          <Col md={12}>
            <Route path='/(experience|projects)' render={props=><hr/>} />
          </Col>
        </Row>
        <Row>
          <Container>
            <Col id="content" md={{span: 10, offset: 1}}>
              <Route path='/experience' component={ExperienceSection} />
              <Route path='/projects' component={ProjectsSection} />
            </Col>
          </Container>
        </Row>
      </Container>
      <FooterSection />
    </div>
    );
  }
}

export default App;
