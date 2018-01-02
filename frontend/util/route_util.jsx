import {Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import SignInFormContainer from '../components/session/sign_in_form_container';
import SignOutFormContainer from '../components/session/sign_out_form_container';
import UserShowContainer from '../components/user/user_show_container.js';

const Auth = function ({component: SessionFormContainer, path, loggedIn}) {
  return (
    <Route path={path} render={(props) => (
        !loggedIn ? (
          <SignOutFormContainer {...props}/>
        ) : (
          <Redirect to="/" />
        )
    )}/>
  );
};

const Protected = function ({component: UserShowContainer, path, loggedIn}) {
  return (
  <Route path={path} render={(props) => (
      loggedIn ? (
      <UserShowContainer {...props}/>
    ) : (
      <Redirect to="/login"/>
    )
  )}/>
  );
};

const mapStateToProps = function(state) {
  return {loggedIn: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
