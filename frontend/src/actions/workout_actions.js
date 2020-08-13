// workout_actions.js

//util imports 

import {getWorkouts, getUserWorkouts, createUserWorkout} from '../util/workout_api_util';

export const RECEIVE_WORKOUTS = 'RECEIVE_WORKOUTS';
export const RECEIVE_USER_WORKOUTS = 'RECEIVE_USER_WORKOUTS';
export const RECEIVE_NEW_WORKOUT = 'RECEIVE_NEW_WORKOUT';

const receiveWorkouts = workouts => {
    return{
        type: RECEIVE_WORKOUTS,
        workouts
    }
};

const receiveUserWorkouts = workouts => ({
    type: RECEIVE_USER_WORKOUTS,
    workouts
});

// const receiveNewWorkout = workout =>({
//     type: RECEIVE_NEW_WORKOUT,
//     workout 
// });


export const fetchWorkouts = () => dispatch =>(
    getWorkouts()
    .then(workouts=> dispatch(receiveWorkouts(workouts)))
    .catch(err => console.log(err))

);

export const fetchUserWorkouts = id => dispatch => (
    getUserWorkouts(id)
    .then(workouts=> dispatch(receiveUserWorkouts(workouts)))
    .catch(err => console.log(err))
);

export const createWorkout = data => dispatch => (
    createUserWorkout(data)
    .then(workout => dispatch(receiveWorkouts(workout)))
    .catch(err => console.log(err))
)

// export const deleteWorkout = id => dispatch =>{
//     deleteWorkout(id)
//     .then(workouts => dispatch(receiveWorkouts(workouts)))
//     .catch(err => console.log(err))

// };


// export const updateWorkout = id => dispatch => {
//     updateWorkout(id)
//     .then(workout => dispatch(receiveWorkouts(workout)))
//     .catch(err => console.log(err))
// }