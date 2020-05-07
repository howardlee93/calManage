// api_util.js

import axios from 'axios';


export const createEvent = (data) =>{
	axios.post('/api/events', data )
};



export const fetchEvents = () =>{

	return axios.get('api/events')
	
}


export const updateEvent = (id, data) => {
	axios.put(`api/events/${id}`, data)
    .then((res) => res.data)
    .catch(err => console.log(err))
}