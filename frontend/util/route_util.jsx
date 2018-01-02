import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import SessionFormContainer from '../components/nav_bar/session_form_container.js';
import UserShowContainer from '../components/user/user_show_container.js';

const Auth = ({component: SessionFormContainer, path, loggedIn}) => (
  <Route path={path} render={(props) => (
      !loggedIn ? (
        <SessionFormContainer {...props}/>
      ) : (
        <Redirect to="/" />
      )
  )}/>
);

const Protected = ({component: UserShowContainer, path, loggedIn}) => (
  <Route path={path} render={(props) => (
      loggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/login"/>
    )
    )}
);

const mapStateToProps = function(state) {
  return {loggedIn: Boolean(state.session.currentUser)};
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth))

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected))
