import React from 'react';

import moment from 'moment';

import './calendar.css';




class Calendar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			dataObject: moment(),
			allmonths :moment.months(),
			selectedDay: null,
			showYearTable: false,
			showMonthTable: false,
			showDateTable: false
		}
	}

	daysInMonth(){
		return this.state.dataObject.daysInMonth();

	}

	year(){
		return this.state.dataObject.format("Y")
	}


	monthList(props){
		let months = [];
		props.data.map(data =>{
			months.push(
				<td key={data}
          		className="calendar-month"
          		onClick={e => {
            	this.setMonth(data);
          		}}
        		>
          		<span>{data}</span>
       			</td>
				);
			});
		let cells = [];
		let rows = [];
		months.forEach((row,i)=>{
			if ( i % 3 !== 0 || i == 0){
				cells.push(row);
			}else{
				rows.push(cell);
				cells = [];
				cells.push(row);


			}
		});
		rows.push(cells);
		let yearlist = rows.map((date, i)=>{
			return <tr>{date}</tr>
		});
		return (
			<table>
				<thead>
					<tr>
					<th colSpan="4">Select a Yeah</th>
					</tr>

				</thead>
				<tbody> {yearlist}</tbody>
			</table>
			)

	}

	today = () => (
		this.state.dataObject.format("D");

	)

	firstDayOfMonth() {
		let dataObject = this.state.dataObject;
		let firstDay = moment(dataObject)
						.startOf("month")
                 		.format("d"); 
        return firstDay;

	}


	month = () => (
		this.state.dataObject.format("MMM")
	);

	showMonth(e, month){
		this.setState({
			showDateTable: !this.state.showDateTable,
			showMonthTable: !this.state.showMonthTable
		});

	}


	setMonth(month){
		let monthNum = this.state.allmonths.indexOf(month);
		let dataObject = Object.assign({}, this.state.dataObject);
		dateObject = moment(dateObject).set("month", monthNo);

		this.setState({
			dateObject: dataObject,
			showMonthTable: !this.state.showMonthTable,
			showDateTable : !this.state.showDateTable
		})
	}

	render(){

		// calendar day 

		let daysInMonth =[];
		for (let i = 0; i <this.daysInMonth(); i ++){
			let currentDay = d == this.currentDay() ? "today" : "";

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

		return(
      		<div>

      		<div className="tail-datetime-calendar">
        	 <div className="calendar-navi">
        	 {this.month()}
      		</div>

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
