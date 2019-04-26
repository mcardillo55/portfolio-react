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
import ScrollAnimation from 'react-animate-on-scroll';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayContent: false
    }

    this.handleCircleClick = this.handleCircleClick.bind(this);
    this.handleNameClick = this.handleNameClick.bind(this);
  }
  handleCircleClick() {
    this.setState({
      displayContent: true
    })
  }
  handleNameClick() {
    setTimeout(() => 
    {
        this.setState({
          displayContent: false
        })
    }, 1000)

  }
  render() {
    return (
    <div>
      <Container>
        <a href="#" id="name-link" onClick={this.handleNameClick}>
          <NameHeader />
        </a>
        <CircleButtons onClick={this.handleCircleClick}/>
        <div id="content" style={{display:this.state.displayContent ? "block" : "none"}}>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <Row>
              <Col md={12}>
                <hr/>
              </Col>
            </Row>
            <Row>
                <Col id="experience" md={{span: 10, offset: 1}}>
                  <ExperienceSection />
                </Col>
            </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <Row>
              <Col md={12}>
                <hr/>
              </Col>
            </Row>
            <Row>
                <Col id="projects" md={{span: 10, offset: 1}}>
                  <ProjectsSection />
                </Col>
            </Row>
          </ScrollAnimation>
        </div>
      </Container>
      <FooterSection />
    </div>
    );
  }
}

export default App;
