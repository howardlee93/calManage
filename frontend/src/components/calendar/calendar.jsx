import React from 'react';

import moment from 'moment';

import './calendar.css';




class Calendar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			dataObject: moment()

		}
	}


	firstDayOfMonth = () =>{
		let dataObject = this.state.dataObject;
		let firstDay = moment(dataObject)
						.startOf("month")
                 		.format("d"); 
        return firstDay;

	}






	render(){

		//calendar structure 


		let totalSlots = [...blankCells, ...daysInMonth];
		let rows = [];
		let cells = [];

		totalSlots.forEach((row, i) => {
			if (i % 7){
				cells.push(row)
			}else{
				rows.push(cells);
				cells = [];
				cells.push(row);

			}

			if ( i == totalSlots.lenght -1){
				rows.push(cells);

			}
		})

		let daysinmonth = rows.map((d, i) => {
      		return <tr>{d}</tr>;
    	});



		//empty calendar day cell
		let blankCells = [];
		for (let i = 0; i < this.firstDayOfMonth();  i ++){
			blankCells.push(
				<td className="days">{" "}</td>
				)
		}

		// calendar day 

		let daysInMonth =[];
		for (let i = 0; i <this.daysInMonth(); i ++){
			daysInMonth.push(
				<td key={i} className="calendar-day">
          			{i}
        		</td>
 
				)
		}


		const weekdayshort = moment.weekdaysShort();

		let weekdayshortname = this. weekdayshort.map(day => {
			return (
				<th key={day}>
					{day}
				</th>
			);
		});

		return(
      		<div>
        		{weekdayshortname}


		    	 <table className="calendar-day">
		            <thead>
		              <tr>{weekdayshortname}</tr>
		            </thead>
		            <tbody>{daysinmonth}</tbody>
		         </table>
      		</div>
			)
		}
};

export default Calendar;
