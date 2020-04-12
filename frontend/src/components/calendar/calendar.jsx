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

				<table> 
					 <thead>
                      <tr className="calendar-header">
                          <td colSpan="3">
                              <this.MonthNav />
                              {" "}
                              <this.YearNav />
                          </td>
                        </tr>
                    </thead>

				</table>

			</div>
			)
	}
};

export default Calendar;
