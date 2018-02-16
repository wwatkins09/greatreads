import React from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


const Auth = function ({component: Component, path, loggedIn}) {
  return (
    <Route path={path} render={(props) => (
        !loggedIn ? (
          <Component {...props}/>
        ) : (
          <Redirect to="/" />
        )
    )}/>
  );
};

const Protected = function ({component: Component, path, loggedIn}) {
  return (
  <Route path={path} render={(props) => (
      loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/signin"/>
    )
  )}/>
  );
};

const mapStateToProps = function(state) {
  return {loggedIn: Boolean(state.session.currentUserId)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
