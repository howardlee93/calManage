import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import { openModal } from '../actions/modal_actions';
import ModalContainer from '../components/modal/modal_container';


const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/workouts" />
    )
  )} />
);

const Protected = ({component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/"/>
      )
    }
  />
);

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  modal: state.modal
});

const mapDispatchToProps = dispatch =>({
  openModal: (modal) => dispatch(openModal(modal))
})
export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, mapDispatchToProps)(Protected));