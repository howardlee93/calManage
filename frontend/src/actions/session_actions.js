import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
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

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(logoutUser())
};

export const login = user => dispatch => {
    APIUtil.login(user)
    .then( res=>{




    })
    .catch(err => dispatch(console.log(err.response.details)))
}