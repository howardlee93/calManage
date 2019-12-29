import axios from 'axios';

export const getTodos = () =>(
	axios.get('/api/todos')
);

export const getUserTodos = id => (
	axios.get(`/api/todos/user/${id}`)
);

export const createTodo = data => (
	axios.post('/api/todos', data)
);


