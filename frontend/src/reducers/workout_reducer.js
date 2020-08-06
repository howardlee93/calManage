// workout_reducer.js
//import actions

import { RECEIVE_WORKOUTS, RECEIVE_USER_WORKOUTS, RECEIVE_NEW_WORKOUT} from '../actions/workout_actions';


const initialState = [];




const workoutReducer = (state = initialState, action) => {
    Object.freeze(state);
    let newState;
    
    switch(action.type){
        
        case RECEIVE_WORKOUTS:
            newState = action.workouts.data;
            // return Object.assign({},state, newState);
            return newState;

        case RECEIVE_USER_WORKOUTS:
            newState = action.workouts.data;
            // return Object.assign({},state, newState);
            return newState;



        case RECEIVE_NEW_WORKOUT:
            newState = action.workouts.data;
            // return Object.assign({},state, newState);
            return newState;

        default:
            return state;
    }

}

export default workoutReducer;
