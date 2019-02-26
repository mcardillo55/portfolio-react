import React from 'react';
import Project from './Project'

const ProjectsSection = () => {
  return(
    <div id="projects">
        <div id="projects">
            <h3>Projects</h3>
            <Project title="cbpro-trader" 
                     link="https://github.com/mcardillo55/cbpro-trader"
                     description="Automated Cryptocurrency Trader"
                     stack={["Python"]}
                     years="2017-2018" 
                     tasks={["Supports all cryptocurrencies available on Coinbase Pro",
                             "Collected real-time data from the Coinbase Pro cryptocurrency market, using their websocket API (via the <a href=\"https://github.com/danpaquin/coinbasepro-python\">coinbasepro-python</a> library)",
                             "Performed real-time technical analysis of cryptocurrency prices, to generate common indicators used in currency trading (using <a href=\"https://github.com/mrjbq7/ta-lib\">ta-lib library</a>)",
                             "Placed buy and sell orders, in Python threads, depending on technical indicators",
                             "Determined, based on current market volatility, whether to use free limit orders or instant market orders",
                             "Created curses interface to view real-time program data in console",
                             "Made contributions back to gdax-python (<a href='https://github.com/danpaquin/coinbasepro-python'>https://github.com/danpaquin/coinbasepro-python</a>)"]}/>
            <Project title="soundcloud-dj" 
                     link="https://github.com/mcardillo55/soundcloud-dj"
                     description="YouTube/SoundCloud Hybrid Playlists"
                     stack={["Python", "Flask", "AngularJS"]}
                     years="2014" 
                     tasks={["Used Facebook Graph API to search for SoundCloud and YouTube links in FB groups",
                             "Stored hybrid playlists of both YouTube and SoundCloud songs in an SQLite database",
                             "Utilized AngularJS and YouTube/SoundCloud JavaScript Player APIs to dynamically play songs in their corresponding player, based on the URL"]}/>
            <Project title="unfriended" 
                     link="https://github.com/mcardillo55/unfriended-flask"
                     description="Facebook Un-Friending Detector"
                     stack={["Python", "Flask"]}
                     years="2014" 
                     tasks={["Used Facebook API to obtain user's friend data",
                             "Utilized Flask framework to store friend data in a MySQL database, which was then retrieved and compared with the user's current friends list on subsequent visits",
                             "Updated app to work around Facebook API restrictions that limited third-party access to friend's list data by parsing an uploaded version of the user's \"Friends\" page in HTML format"]}/>
            <Project description="Student Space Programs Laboratory"
                     stack={["C", "GTK+"]}
                     years="2010" 
                     tasks={["Developed front end interface to parse XML messages from a near-space satellite, classify by severity and display in a table format on ground station computers"]}/>
        </div>
    </div>
  )
}

export default ProjectsSection;