import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import NameHeader from './components/NameHeader';
import CircleButtons from './components/CircleButtons';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import FooterSection from './components/FooterSection';
import ReturnToTopButton from './components/ReturnToTopButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayContent: false,
      yOffset: 0
    }

    this.handleCircleClick = this.handleCircleClick.bind(this);
    this.handleNameClick = this.handleNameClick.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({
        yOffset: window.pageYOffset
      })
    })
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
        <ScrollAnimation animateIn="fadeIn" animateOnce="True">
          <a href="#" id="name-link" onClick={this.handleNameClick}>
            <NameHeader />
          </a>
          <CircleButtons onClick={this.handleCircleClick}/>
        </ScrollAnimation>
        <div id="content">
          <ScrollAnimation animateIn="fadeIn" animateOnce="True">
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
          <ScrollAnimation animateIn="fadeIn" animateOnce="True">
            <div className="pb-5" >
              <Row>
                <Col md={12}>
                  <hr/>
                </Col>
              </Row>
              <Row id="experience">
                  <Col md={{span: 10, offset: 1}}>
                    <ExperienceSection />
                  </Col>
              </Row>
            </div>
          </ScrollAnimation>
        </div>
      </Container>
      <ReturnToTopButton yOffset={this.state.yOffset} />
      <FooterSection />
    </div>
    );
  }
}

export default App;
