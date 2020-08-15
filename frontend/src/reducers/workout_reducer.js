// workout_reducer.js
//import actions

import { RECEIVE_WORKOUTS, RECEIVE_USER_WORKOUTS, RECEIVE_NEW_WORKOUT, DELETE_WORKOUT} from '../actions/workout_actions';

const initialState = [];

const workoutReducer = (state = initialState, action) => {
    Object.freeze(state);
    
    let newState;
    
    switch(action.type){
        
        case RECEIVE_WORKOUTS:
            newState = action.workouts.data;
            // newState = Object.assign({}, state, action.workouts.data);

            // newState = {...state, workouts: action.workouts.data }
            return newState;

        case RECEIVE_USER_WORKOUTS:
            newState = action.workouts.data;
            return Object.assign({},state, newState);
            // return newState;


        case DELETE_WORKOUT:

            newState = state.filter(workout => workout._id !== action.id);
            return Object.assign({},state, newState);

        default:
            return state;
    }

}

export default workoutReducer;
