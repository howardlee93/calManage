// todo_actions.js

import { getTodos, getUserTodos, createTodo } from '../util/todo_api_util';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_USER_TODO = 'RECEIVE_USER_TODO';
export const RECEIVE_NEW_TODO = 'RECEIVE_NEW_TODO';

export const receiveTodos = todos =>({
	type: RECEIVE_TODOS,
	todos
});

export const receiveUserTodo = todo => ({
	type: RECEIVE_USER_TODO,
	todo
});

export const receiveNewTodo = todo => ({
	type:RECEIVE_NEW_TODO,
	todo
});


export const fetchTodos = () => dispatch =>(
	getTodos()
	.then(todos => dispatch(receiveTodos(todos)))
	.catch(err => console.log(err))
);


export const fetchUserTodos = id => dispatch => (
	getUserTodos(id)
	.then(todo => dispatch(receiveUserTodo(todo)))
	.catch(err => console.log(err))
);


export const composeTodo = data => dispatch => (
	createTodo(data)
	.then(todo => dispatch(receiveNewTodo(todo)))
	.catch(err => console.log(err))
);
