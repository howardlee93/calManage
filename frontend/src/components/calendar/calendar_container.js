// calendar_container.js


import {connect } from 'react-redux';
import Calendar from './calendar';


const mapStateToProps = (state) =>({
	date: state.date
});



export default connect(mapStateToProps, null)(Calendar);
