import React from 'react';
import '../assets/styles/App.css';
import Landing from './landing';
import ModalContainer from './modal/modal_container';


import {BrowserRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal } from '../actions/modal_actions';


function App(props) {

  return (
    <BrowserRouter>
    <div className="App">
    <ModalContainer/>
      <header className="App-header">

        <h1><Link to='/' id="header-link">CalManage</Link></h1>
        <h3> Jumpstart your fitness journey with your personalized fitness tracker</h3>
        <aside className='session-section'>      
          <button className="session-links" onClick={()=>props.openModal("signin")}>Sign In</button>
          <button className="session-links" onClick={()=>props.openModal('signup')}>Sign Up</button>
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

const mapStateToProps = state =>{
  return{
    modal: state.modal
  }
};

const mapDispatchToProps = dispatch=>({
  openModal: modal => dispatch(openModal(modal)),
})


export default connect(mapStateToProps, mapDispatchToProps) (App);
