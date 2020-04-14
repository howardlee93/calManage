import React from 'react';

import moment from 'moment';

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
      		<div>
        		<div>Header</div>
        		<div>Days</div>
        		<div>Cells</div>
      		</div>
			)
		}
};

export default Calendar;
