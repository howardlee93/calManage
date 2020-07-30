// import session actions
import {connect} from 'react-redux';

import SignIn from './signin';
import SignUp from './signup';

const mapStateToProps = state =>({
    loggedIn: state.loggedIn

});


const mapDispatchToProps = dispatch => ({

});

export const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);
export const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);
