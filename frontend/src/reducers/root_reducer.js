// root_reducer.js

import { combineReducers } from 'redux';
import eventReducer from './event_reducer';
import calReducer from './cal_reducer';
import sessionReducer from './session_reducer';


export default combineReducers({
	events: eventReducer,
	session: sessionReducer

})