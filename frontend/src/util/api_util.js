// api_util.js

import axios from 'axios';


export const createEvent = (data) =>{
	axios.post('/api/todos', data )
};



export const fetchEvents = () =>{

	return axios.get('api/todos')
	
}

