

import React from 'react';

import {Link} from 'react-router-dom';


export default function EventList({events}){
	


	const listStyle = {
		fontSize: '10pts'
	};



	const eventDisplay = events.map((event, i) => (
		<event style={listStyle} key={i}>
			<p>{event.title}</p>
			<p>{event.time}</p>
			<p>{event.date}</p>
			<p>{event.details}</p>
			<Link>Update event</Link>
			<button> Delete event</button>

		</event>

		));


	return(
		<div>
		<h1> This will display the events you have going on</h1>
		{eventDisplay}


		</div>
		)


}