// users_api_util.js

import axios from 'axios';


export const postUser = (user) =>(
	 axios({
		url: '/api/users',
		method:'POST',
		data: {user}
	})
);


export const postSession = (user) =>(
	axios({
		url:'/api/session',
		method:'POST',
		data: {user}
	})
);

export const deleteSession = () =>(
	axios({
		url:'/api/session',
		method:'DELETE'
	})
);

