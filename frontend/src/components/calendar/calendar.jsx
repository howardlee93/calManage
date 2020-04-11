import React from 'react';

import './calendar.css';


class Calendar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			currentMonth: new Date()

		}
	}


	makeGrid(){

		for (let i = 0; i)

	}
	render(){
		return(
			<div className ="calendar">



			</div>
			)
	}
};

export default Calendar;
