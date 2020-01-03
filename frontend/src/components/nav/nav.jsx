import React from 'react';
import {Link} from 'react-router-dom';

const Nav = ({ currentUser, login, logout, openModal, history, isAuthenticated }) => {
	
	const logoutUser = () =>(
		logout().then(()=> (
			history.push("/")
		))
	);


	const sessionLinks = () => (
		<nav>

		<Link to="/"> CalTime</Link>

		<button className="session-btn" onClick={()=> openModal('signup')}> Signup </button>

		<button className="session-btn" onClick={()=> openModal('login')}> Login </button>

		<button className="session-btn" onClick={()=> login({email:'guest@email.com', password:"password"})}> Demo </button>
		</nav>

	);

	const personal = () =>(
		<nav>
				<h1> Hi, {currentUser.handle}</h1>
                <Link to={'/profile'}>Profile</Link>
                <button onClick={logoutUser}>Logout</button>
         </nav>

	);

	return(
			isAuthenticated ? 
				personal(currentUser, logout) :
				sessionLinks()
		);

};

export default Nav;
