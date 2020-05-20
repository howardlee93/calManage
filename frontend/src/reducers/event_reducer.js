// event_reducer.js

import {RECEIVE_EVENTS, RECEIVE_SINGLE_EVENT, DELETE_EVENT} from "../actions/event_actions";

const eventReducer = (state = {}, action) =>{
	Object.freeze(state);
	let newState; 
	switch(action.type){

		case RECEIVE_EVENTS:
			newState = Object.assign({}, state, action.events.data);
			return newState;


		case RECEIVE_SINGLE_EVENT:
			newState = Object.assign({}, state, action.event.data);

			return newState;

		case DELETE_EVENT:
			let filtered =state.filter(event => event.id !== action.payload)

			newState = Object.assign({}, state, filtered);
			return newState;


		default:
			return state
	}

}

export default eventReducer;
