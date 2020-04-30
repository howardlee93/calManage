//eventmodal.jsx

import React from 'react';
import Modal from '@material-ui/core/Modal';

import './event.css';

import EventForm from './eventform';


class EventModal extends React.Component{
	
	constructor(props){
		super(props)
		this.state = {
			open: false
		}
	}
	

	// componentDidMount(){
	// 	this.setState({
	// 		open: this.props.modalDisplay
	// 	});

	// }

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
			<button onClick={()=> this.handleOpen()}>Create event </button>
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
