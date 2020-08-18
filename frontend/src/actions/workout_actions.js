// workout_actions.js

//util imports 

import {getWorkouts, getUserWorkouts, createUserWorkout, deleteWorkout, updateWorkout} from '../util/workout_api_util';

export const RECEIVE_WORKOUTS = 'RECEIVE_WORKOUTS';
export const RECEIVE_USER_WORKOUT = 'RECEIVE_USER_WORKOUT';
export const RECEIVE_NEW_WORKOUT = 'RECEIVE_NEW_WORKOUT';
export const DELETE_WORKOUT = 'DELETE_WORKOUT';


const receiveWorkouts = workouts => {
    return{
        type: RECEIVE_WORKOUTS,
        workouts
    }
};

const receiveUserWorkout = workout => ({
    type: RECEIVE_USER_WORKOUT,
    workout
});

const removeWorkout = id =>({
    type: DELETE_WORKOUT,
    id
     
});

export const fetchWorkouts = () => dispatch =>(
    getWorkouts()
    .then(workouts=> dispatch(receiveWorkouts(workouts)))
    .catch(err => console.log(err))

);

export const fetchUserWorkouts = id => dispatch => (
    getUserWorkouts(id)
    .then(workout=> dispatch(receiveUserWorkout(workout)))
    .catch(err => console.log(err))
);

export const createWorkout = data => dispatch => (
    createUserWorkout(data)
    .then(workouts => dispatch(receiveWorkouts(workouts)))
    .catch(err => console.log(err))
)

export const deleteUserWorkout = id => dispatch =>(
    deleteWorkout(id)
    .then(() => dispatch(removeWorkout(id)))
    .catch(err => console.log(err))
    
);


export const updateUserWorkout = (id, data) => dispatch => {
    updateWorkout(id, data)
    .then(workouts => dispatch(receiveWorkouts(workouts)))
    .catch(err => console.log(err))
}