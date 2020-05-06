import * as APIUtil from '../util/api_util';



//types 

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';

export const RECEIVE_SINGLE_EVENT = 'RECEIVE_SINGLE_EVENT';




export const receiveEvents = (events) => {
	return {
		type: RECEIVE_EVENTS,
		events
	}

};

export const receiveSingleEvent = (event) =>({
	type: RECEIVE_SINGLE_EVENT,
	event
})

export const fetchEvents = (dispatch) => {
	APIUtil.fetchEvents()
	.then((events) =>dispatch(receiveEvents(events)))


}