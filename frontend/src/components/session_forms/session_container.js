// import session actions
import {connect} from 'react-redux';
import {signup, logout, login} from '../../actions/session_actions';



import SignIn from './signin';
import SignUp from './signup';

const mapStateToProps = state =>({
    loggedIn: state.loggedIn

});


const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout), 
});

export const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);
export const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);
