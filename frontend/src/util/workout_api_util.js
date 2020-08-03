import axios from 'axios';


export const getWorkouts =() =>{
    return axios.get('/api/workouts/');
};

export const getUserWorkouts = id =>{
    return axios.get(`/api/workouts/user/${id}`)
};

export const createUserWorkout = data =>{
    return axios.post(`/api/workouts/`, data);
    
}