import {combineReducers} from 'redux';
import session from './session_reducer';
import modal from './modal_reducer';
import workout from './workout_reducer';


const rootReducer = combineReducers({
    session: session,
    workout: workout,
    modal:modal
});

export default rootReducer;
