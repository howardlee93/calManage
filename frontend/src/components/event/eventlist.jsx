

import React from 'react';


export default function EventList({events}){
	

	const eventDisplay = events.map((event, i) => (
		<event key={i}>
			<p>{event.title}</p>
			<p>{event.time}</p>
			<p>{event.date}</p>
			<p>{event.details}</p>
		</event>

		))
	


	return(
		<div>
		<h1> This will display the events you have going on</h1>
		{eventDisplay}

		</div>
		)


}