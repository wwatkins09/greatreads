import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import SignIn from './sign_in';
import {signIn, clearSessionAndUserErrors} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    sessionErrors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
    clearSessionAndUserErrors: () => dispatch(clearSessionAndUserErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
