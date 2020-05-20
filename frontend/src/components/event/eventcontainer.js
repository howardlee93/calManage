// eventcontainer.js


import {connect} from "react-redux";

import {createEvent, updateEvent, deleteEvent, fetchEvents} from '../../actions/event_actions';

import EventForm from './eventform';



const mapStateToProps = (state) => ({
	// title: state.title,
	// time: state.time,
	// date: state.date,
	// open: state.open,
	event : state.event

});


const mapDispatchToProps = dispatch => ({
	createEvent: (data) => dispatch(createEvent(data)),
	updateEvent: (id, data) => dispatch(updateEvent(id, data)),
	deleteEvent: id => dispatch(deleteEvent(id)),
	fetchEvents: () => dispatch(fetchEvents())

});


export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

