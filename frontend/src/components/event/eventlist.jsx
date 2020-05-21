

import React from 'react';


export default function EventList({props}){
	
	let events = {props};



	let title = Object.values(events);
	
	return(
		<div>
		<h1> This will display the events you have going on</h1>

		<h1>{events.title}</h1>
		<h3>{events.time}</h3>
		<h3>{events.date}</h3>
		<p>{events.details}</p>
		



		</div>
		)


}