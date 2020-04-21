// eventcontainer.js


import {connect} from "react-redux";

import {createEvent} from '../../util/api_util';

import EventForm from './eventform';








const mapStateToProps = (state) => ({
	title: state.title,
	time: state.time
});


const mapDispatchToProps = dispatch => {
	createEvent: dispatch(createEvent(title, time))
};


export default connect(mapStateToProps, mapDispatchToProps)(EventForm);

