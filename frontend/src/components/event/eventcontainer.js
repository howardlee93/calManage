// eventcontainer.js


import {connect} from "react-redux";

import {createEvent, updateEvent, deleteEvent, fetchEvents, fetchEventsByDate} from '../../actions/event_actions';

import EventModal from './eventmodal';



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


export default connect(mapStateToProps, mapDispatchToProps)(EventModal);

