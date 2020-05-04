// eventcontainer.js


import {connect} from "react-redux";

import {createEvent} from '../../util/api_util';

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

