//eventmodal.jsx

import React from 'react';
import Modal from '@material-ui/core/Modal';

import './event.css';

import EventForm from './eventform';


class EventModal extends React.Component{
	
	constructor(props){
		super(props)
		this.state = {
			open: props.open
		}
	}
	

	componentDidMount(){
		// this.setState({
		// 	open: this.props.modalDisplay
		// });
		console.log(this.props.open);
		console.log(this.props.selectedDay);
		

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
				
			<h6>Add an event on {this.props.selectedDay}</h6>
			
			<Modal className="modal"
				open={this.state.open}
  				onClose={()=>this.handleClose()}
  			>

  			<EventForm
  				date={this.props.selectedDay}
  			/>

  			</Modal>
  			</div>

			)
	}


};


export default EventModal;
