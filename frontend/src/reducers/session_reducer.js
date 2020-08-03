// session_reducer.js
//actions 


import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT, RECEIVE_USER_SIGN_IN} from '../actions/session_actions';

const initialState = {
    user:{},
    loggedIn: false

}

const sessionReducer = (state= initialState, action) =>{
    Object.freeze(state);
    switch(action.type){
        
        case RECEIVE_CURRENT_USER:
            return {
              ...state,
              loggedIn: !!action.currentUser,
              user: action.currentUser
            };
          case RECEIVE_USER_LOGOUT:
            return {
                loggedIn: false,
              user: undefined
            };
          case RECEIVE_USER_SIGN_IN:
            return {
              ...state,
              isSignedIn: true
            }
        default:
            return state;
    }

}

export default sessionReducer;
