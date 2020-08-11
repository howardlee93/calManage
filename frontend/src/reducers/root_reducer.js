import {combineReducers} from 'redux';
import session from './session_reducer';
import modal from './modal_reducer';
import workouts from './workout_reducer';


const rootReducer = combineReducers({
    session: session,
    workouts: workouts,
    modal: modal
});

export default rootReducer;
