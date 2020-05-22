//eventmodal.jsx

import React from 'react';
import Modal from '@material-ui/core/Modal';

import './event.css';

// import EventForm from './eventform';

import EventList from './eventlist';


class EventModal extends React.Component{
	
	constructor(props){
		super(props)
		this.state = {
			open: props.open,
			date: `${this.props.month} ${this.props.selectedDay}, ${this.props.year}`,

		}
	}
	

	componentDidMount(){
		this.props.fetchEvents()
	}

	componentDidUpdate(prevProps, prevState){
		console.log(this.props.events);
		if(this.props.events !== prevState.events ){
			this.setState({
				events: this.props.events
			}, ()=>	console.log(this.state.events))
		}

	}

	handleClose(){
		this.setState({
			open: false
		})
	}


	render(){

		return(

			<div>
				
			<h6>Added an event on the {this.props.selectedDay}</h6>


			<Modal className="modal"
				open={this.state.open}
  				onClose={()=>this.handleClose()}
  			>
  			<EventList props={this.state.events}/>
  				
  		

  			</Modal>
  			</div>

			)
	}


};





export default EventModal;
