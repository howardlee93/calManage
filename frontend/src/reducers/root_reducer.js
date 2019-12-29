// root_reducer.js

import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './error_reducer';
import todos from './todo_reducer';


export default ()=> combineReducers({
	errors,
	session,
	todos
});

