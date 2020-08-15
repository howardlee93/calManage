// workout_reducer.js
//import actions

import { RECEIVE_WORKOUTS, RECEIVE_USER_WORKOUTS, RECEIVE_NEW_WORKOUT, DELETE_WORKOUT} from '../actions/workout_actions';


const workoutReducer = (state = [], action) => {
    Object.freeze(state);
    
    let newState;
    
    switch(action.type){
        
        case RECEIVE_WORKOUTS:
            newState = action.workouts.data;
            return Object.assign({},state, newState);
            // return newState;

        case RECEIVE_USER_WORKOUTS:
            newState = action.workouts.data;
            return Object.assign({},state, newState);
            // return newState;


        case DELETE_WORKOUT:
            // return state.filter(workout => workout._id !== action._id);

            newState = state.workouts.slice();
            delete newState[action.id];

            return newState;

        default:
            return state;
    }

}

export default workoutReducer;
