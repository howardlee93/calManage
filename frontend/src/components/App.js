import React from 'react';
import '../assets/style/App.css';
import {Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_api_util';
import Modal from './modal';
import Calendar from './calendar/calendar';
import SearchContainer from './search/search_container';


function App() {

  return (
    <div className="App">
    <Modal/>
    <header>
    	<h1>CalManage</h1>
        nav goes here 
    </header>

    <Switch>
        <SearchContainer/>
        graph
        search
        edit
        add 

        

    </Switch>
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
