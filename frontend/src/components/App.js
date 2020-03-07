import React from 'react';
import '../assets/style/App.css';
import {Switch, Link } from 'react-router-dom';
import Modal from './modal';

import CalendarContainer from './calendar/calendar_container';


function App() {

  return (
    <div className="App">
    <Modal/>
    <header>
    	<h1>CalManage</h1>
    </header>
    <CalendarContainer/>

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
