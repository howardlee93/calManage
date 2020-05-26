// api_util.js

import axios from 'axios';


export const createEvent = (data) =>{
	return axios.post('/api/events/', data )
	.then( res => res.data)
	.catch(err => console.log(err))
};



export const fetchEvents = () =>{

	return axios.get('/api/events/')
	.then(res => res.data)
	.catch(err => console.log(err))
	
}


export const updateEvent = (id, data) => {
	return axios.put(`/api/events/${id}`, data)
    .then((res) => res.data)
    .catch(err => console.log(err))
}

export const fetchSingleEvent = (id) =>{
	return axios.get(`/api/events/${id}`)
	.then((res) => res.data)
    .catch(err => console.log(err))
}

export const fetchEventByDate = date => {
	return axios.get(`api/events/${date}`)
	.then((res) => res.data)
    .catch(err => console.log(err))
}

export const deleteEvent = (id) => dispatch =>{
	return axios.delete(`/api/events/${id}`)
	.then((res) => res.data)
    .catch(err => console.log(err))
}