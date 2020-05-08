// eventcontainer.js


import {connect} from "react-redux";

import {createEvent} from '../../actions/event_actions';

import EventForm from './eventform';



const mapStateToProps = (state) => ({
	title: state.title,
	time: state.time,
	date: state.date,
	open: state.open,

});


const mapDispatchToProps = dispatch => ({
	createEvent: (data) => dispatch(createEvent(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

