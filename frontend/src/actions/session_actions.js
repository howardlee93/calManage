import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";


export const receiveCurrentUser = (user) =>{
    return{
        type: RECEIVE_CURRENT_USER,
        user
    }
};

const receiveUserSignIn = () => ({
    type: RECEIVE_USER_SIGN_IN
});
  
const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
}); 

export const signup = user => dispatch =>{
    APIUtil.signup(user)
    .then(()=>dispatch(receiveUserSignIn()),
    err=>(dispatch(receiveErrors(err))));

}

export const logout = () => dispatch =>{
    APIUtil.logout()
    .then(()=> dispatch(logoutUser()),
    err => dispatch(receiveErrors(err)))
}