// session_reducer.js
//actions 


import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT, RECEIVE_USER_SIGN_IN} from '../actions/session_actions';

const initialState = {
   currentUser: null

}

const sessionReducer = (state= initialState, action) =>{
    Object.freeze(state);
      switch(action.type) {
        case RECEIVE_CURRENT_USER:
          const currentUser = action.currentUser;
          return Object.assign({}, state, { currentUser });
        case RECEIVE_USER_LOGOUT:
          return state;
        default:
          return state;
      }
       

}

export default sessionReducer;
