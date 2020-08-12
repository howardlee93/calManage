import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import { openModal } from '../actions/modal_actions';


const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/workouts" />
    )
  )} />
);

const Protected = ({component: Component, loggedIn, openModal, ...rest }) => (
  <Route
    {...rest}
    render={props =>{
      if(loggedIn){
       return (<Component {...props} />);
      }else{
        openModal('signin');
        return null;
      }
    }
  }
  />
);

const mapStateToProps = state => ({
  loggedIn: state.session.loggedIn,
  modal: state.modal
});

const mapDispatchToProps = dispatch =>({
  openModal: (modal) => dispatch(openModal(modal))
})
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, mapDispatchToProps)(Protected));