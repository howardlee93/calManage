// todo_reducer.js

import { RECEIVE_TODOS, RECEIVE_USER_TODO, RECEIVE_NEW_TODO } from '../actions/todo_actions';

const todoReducer = (state = {}, action) =>{

	Object.freeze(state);
	let newState = Object.assign({}, state);
	switch(action.type){

		case RECEIVE_TODOS:
			newState.all = action.todos.data;
			return newState;

		case RECEIVE_USER_TODO:
			newState.user = action.todos.data;
			return newState;

		case RECEIVE_NEW_TODO:
			newState.new = action.todo.data;
			return newState

		default:
			return state
	}

}

export default todoReducer;
