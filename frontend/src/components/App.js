import React from 'react';
import '../assets/styles/App.css';
import Landing from './landing';
import ModalContainer from './modal/modal_container';


import {BrowserRouter, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">

        <h1><Link to='/'>Personalized fitness tracker</Link></h1>
        <h3> Jumpstart your fitness journey</h3>
        <aside className='session-section'>      
          <button className="session-links">Sign In</button>
          <button className="session-links">Sign Up</button>
        </aside>
   

        <menu>
          <Link to='/' className="nav-links">Fitness!</Link>
          <Link to="resources" className="nav-links">Resources</Link>
          <Link to="dash" className="nav-links">Dashboard</Link>
        </menu>
      </header>

      <Landing/>
    </div>
    </BrowserRouter>
  );
}

export default App;
