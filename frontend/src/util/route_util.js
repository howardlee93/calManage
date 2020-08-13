import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import { openModal } from '../actions/modal_actions';


const Auth = ({ component: Component, path, isAuthenticated, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to="/workouts" />
    )
  )} />
);

const Protected = ({component: Component, isAuthenticated, openModal, ...rest }) => (
  <Route
    {...rest}
    render={props =>{
      if(isAuthenticated){
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
  isAuthenticated: state.isAuthenticated
  // modal: state.modal
});

const mapDispatchToProps = dispatch =>({
  openModal: (modal) => dispatch(openModal(modal))
})
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, mapDispatchToProps)(Protected));