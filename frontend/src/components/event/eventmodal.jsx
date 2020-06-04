//eventmodal.jsx

import React from 'react';
import Modal from '@material-ui/core/Modal';

import './event.css';

import EventForm from './eventform';

import EventList from './eventlist';


class EventModal extends React.Component{
	
	constructor(props){
		super(props)
		this.state = {
			open: props.open,
			date: `${this.props.month} ${this.props.selectedDay}, ${this.props.year}`,
			events:[]

		}
	}
	

	componentDidMount(){

		let dateObj = new Date(this.state.date);
		console.log(dateObj.toISOString());


		this.props.fetchEventsByDate(dateObj.toISOString())
		.then( events => this.setState({events: this.props.events}))
		

	}

	// componentDidUpdate(prevProps, prevState){
	// 	console.log(this.state.events);
	// 	// if(this.props.events !== prevState.events ){

	// 	// 	this.setState({events: this.props.events}), 
	// 	// 	()=> console.log(this.state.events)
	// 	// }

	// }

	handleClose(){
		this.setState({
			open: false
		})
	}


	render(){

		return(

			<div>
				
			<h6>Added an event on the {this.props.selectedDay}</h6>
			<h1>{this.state.events.title}</h1>

			<Modal className="modal"
				open={this.state.open}
  				onClose={()=>this.handleClose()}
  			>
  			{(this.state.events.length) ? <EventList events={this.state.events}/>
  			: <EventForm events={this.state.events}/>
			}

  			</Modal>

  			</div>

			)
	}


};







export default EventModal;
