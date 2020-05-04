//eventmodal.jsx

import React from 'react';
import Modal from '@material-ui/core/Modal';

import './event.css';

import EventForm from './eventform';


class EventModal extends React.Component{
	
	constructor(props){
		super(props)
		this.state = {
			open: props.open,
			date: `${this.props.month} ${this.props.selectedDay}, ${this.props.year}`
		}
	}
	

	componentDidMount(){
		//this.setState({
		//	data: this.props.data
		//})

	}

	handleOpen(){
		this.setState({
			open: true
		})
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

  			<EventForm
  				date={this.state.date}
  			/>

  			</Modal>
  			</div>

			)
	}


};


export default EventModal;
