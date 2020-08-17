import axios from 'axios';


export const getWorkouts = () =>{
    return axios.get('/api/workouts/');
};

export const getUserWorkouts = id =>{
    return axios.get(`/api/workouts/${id}`)
};

export const createUserWorkout = data =>{
    return axios.post('/api/workouts/', data);
    
}

export const deleteWorkout = id =>{
    return axios.delete(`/api/workouts/${id}`);
};


export const updateWorkout = (id, data) =>{
    return axios.put(`/api/workouts/${id}`, data)
};

