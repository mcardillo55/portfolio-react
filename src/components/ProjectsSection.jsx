import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProjectCard from './ProjectCard'
import CBPro from '../images/cbprotrader.png'
import SCDJ from '../images/soundclouddj.png'
import Unfriended from '../images/unfriended.png'

const ProjectsSection = () => {
  return(
    <div id="projects">
        <div id="projects">
            <h3>Projects</h3>
            <Row className="mb-3">
              <Col md={6}>
                <ProjectCard title="soundcloud-dj" 
                        source_link="https://github.com/mcardillo55/soundcloud-dj"
                        demo_link="https://www.shipfamradio.com/"
                        image={SCDJ}
                        description="YouTube/SoundCloud Hybrid Playlists"
                        stack={["Python", "Flask", "AngularJS"]}
                        years="2014" 
                        tasks={["Searched for SoundCloud and YouTube links in Facebook groups using Graph API",
                                "Graph API functionality was deprecated. Instead uses hourly cron job to run a PhantomJS script and graph the group data",
                                "Song data is submitted via POST request to Flask backend and stored in a SQLite database",
                                "Used AngularJS and YouTube/SoundCloud Frontend APIs to play songs in their corresponding player",
                                "Playlist is updated live, via Socket.IO, if page is open while songs are added to backend"]}/>
              </Col>
              <Col md={6}>
                <ProjectCard title="unfriended" 
                        source_link="https://github.com/mcardillo55/unfriended-flask"
                        demo_link="https://www.michaeljcardillo.com/unfriended-flask/"
                        image={Unfriended}
                        description="Facebook Un-Friending Detector"
                        stack={["Python", "Flask"]}
                        years="2014" 
                        tasks={["Grabs user's friend list via Facebook's Graph API (deprecated: now uses user submitted HTML)",
                                "Utilized Flask framework to store friend data in a MySQL database, which was then retrieved and compared with the user's current friends list on subsequent visits",
                                "Updated app to work around Facebook API restrictions that limited third-party access to friend's list data by parsing an uploaded version of the user's \"Friends\" page in HTML format"]}/>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <ProjectCard title="cbpro-trader" 
                        source_link="https://github.com/mcardillo55/cbpro-trader"
                        image={CBPro}
                        description="Automated Cryptocurrency Trader"
                        stack={["Python"]}
                        years="2017-2018" 
                        tasks={["Consumes tick data <a href='https://pro.coinbase.com/'>Coinbase Pro</a> websocket",
                                "Calculates <a href='https://en.wikipedia.org/wiki/Technical_analysis'>technical analysis</a> indicators",
                                "Places buy and sell orders in threads via the Coinbase Pro REST API",
                                "Determines whether to place free limit orders or instant market orders, based on market volatility, ",
                                "Features curses interface to view real-time program data in console"]}/>
              </Col>
              <Col md={6}>
                <ProjectCard title="Student Space Programs Laboratory"
                        stack={["C", "GTK+"]}
                        years="2010" 
                        tasks={["Developed front end interface to parse XML messages from a near-space satellite",
                                "Messages were classified by severity and displayed in table"]}/>
              </Col>
            </Row>
        </div>
    </div>
  )
}

export default ProjectsSection;