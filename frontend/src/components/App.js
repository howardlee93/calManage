import React from 'react';
import '../assets/style/App.css';
import {Switch, Link } from 'react-router-dom';


import Calendar from './calendar/calendar';

import EventForm from './event/eventform';




function App() {

  return (
    <div className="App">
    <header>
    	<h1>CalManage</h1>
    </header>
    <EventForm/>

    <footer className="main-footer">

                <p>Hi! This web application was built with the MERN stack as a todo list practice project.</p>

                <p> Copyright Howard Lee {new Date().getFullYear()}</p>

                <div className="footer-links">
                <a href="https://github.com/howardlee93" target="_blank">Github</a>
                <a href="https://www.linkedin.com/in/leehoward93/" target="_blank" >LinkedIn</a>
                <a href="https://howardlee93.github.io/" target="_blank">Portfolio</a>
                </div>

            </footer>

    </div>

  );
}

export default App;
