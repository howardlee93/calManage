

import React from 'react';


export default function EventList(props){
	
	let events = props.events;

	const eventDisplay = events.map((event, i) => (
		<event key={i}>
			<h1>{event.title}</h1>
			<h1>{event.time}</h1>
			<h1>{event.date}</h1>
			<p>{event.details}</p>
		</event>

		))
	


	// let title = Object.values(events.title);

	return(
		<div>
		<h1> This will display the events you have going on</h1>
		{eventDisplay}

		</div>
		)


}