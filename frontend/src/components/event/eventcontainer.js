// eventcontainer.js


import {connect} from "react-redux";

import {createEvent, updateEvent, deleteEvent, fetchEvents, fetchEventsByDate} from '../../actions/event_actions';

import EventModal from './eventmodal';
import EventForm from './eventform';
import EventList from './eventlist';




const mapStateToProps = (state) => ({

	events: state.events

});


const mapDispatchToProps = dispatch => ({
	createEvent: (data) => dispatch(createEvent(data)),
	updateEvent: (id, data) => dispatch(updateEvent(id, data)),
	deleteEvent: id => dispatch(deleteEvent(id)),
	fetchEvents: () => dispatch(fetchEvents()),
	fetchEventsByDate: (date) => dispatch(fetchEventsByDate(date))

});


export const EventModalContainer = connect(mapStateToProps, mapDispatchToProps)(EventModal);
export const EventFormContainer = connect(mapStateToProps, mapDispatchToProps)(EventForm);
export const EventListContainer = connect(mapStateToProps, mapDispatchToProps)(EventList);
