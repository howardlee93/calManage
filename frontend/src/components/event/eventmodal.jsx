//eventmodal.jsx

import React from 'react';
import {Modal} from '@material-ui/core/Modal';

import EventForm from './eventform';


class EventModal extends React.Component{
	constructor(props){
		super(props);
		state = {
			title: "",
		}
	}


	render(){
		return(
			<Modal
				open={open}
  				onClose={handleClose}
  				>




  			<EventForm/>


  			
  			</Modal>

			)
	}


};


export default EventModal;
