import React from 'react';

const ProjectsSection = () => {
  return(
    <div id="projects">
        <div id="projects">
            <h2>Projects</h2>
            <div className="project">
                <h4><a href="https://github.com/mcardillo55/gdax-trader">gdax-trader</a> - GDAX Cryptocurrency Trading Platform/Bot (Python) - 2017-2018</h4>
                <ul>
                    <li>Supports Bitcoin, Ether and Litecoin</li>
                    <li>Collected real-time data from the GDAX cryptocurrency market, using their websocket API (via the <a href="https://github.com/danpaquin/gdax-python">gdax-python</a> library)</li>
                    <li>Performed real-time technical analysis of cryptocurrency prices, to generate common indicators used in currency trading (using <a href="https://github.com/mrjbq7/ta-lib">ta-lib library</a>)</li>
                    <li>Automated placing of buy and sell orders based on technical indicators</li>
                    <li>Determined, based on current market volatility, whether to use free limit orders or instant market orders</li>
                    <li>Created simple curses interface to view realtime status of bot in console</li>
                    <li>Made contributions back to gdax-python (<a href="https://github.com/danpaquin/gdax-python">https://github.com/danpaquin/gdax-python</a>)</li>
                </ul>
                <h4><a href="https://github.com/mcardillo55/soundcloud-dj">soundcloud-dj</a> - YouTube/SoundCloud Hybrid Playlists (Python/Flask/AngularJS) - 2016</h4>
                <ul>
                    <li>Used Facebook Graph API to search for SoundCloud and YouTube links in groups</li>
                    <li>Created hybrid playlists of both YouTube and SoundCloud songs</li>
                    <li>Utilized YouTube/SoundCloud JavaScript APIs to continuously play songs</li>
                </ul>
                <h4><a href="https://github.com/mcardillo55/unfriended-flask">unfriended</a> - Facebook Un-Friending Detector (Python/Flask) - 2015</h4>
                <ul>
                    <li>Used Facebook API to obtain user's friend data</li>
                    <li>Utilized Flask framework to store friend data in a MySQL database, which was then retrieved and compared with the user's current friends list on subsequent visits</li>
                    <li>Updated app to work around Facebook API restrictions that limited third-party access to friend's list data by parsing an uploaded version of the user's "Friends" page in HTML format</li>
                </ul>
            </div>
            <div className="project">
                <h4>Student Space Programs Laboratory (C/GTK+) - 2010</h4>
                <ul>
                    <li>Developed front end interface to parse XML messages from a near-space satellite, classify by severity and display in a table format on ground station computers</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ProjectsSection;