import {connect} from 'react-redux';
import SignInForm from './sign_in_form';
import {signIn} from '../../actions/session_actions';

const mapStateToProps = function (state) {
  return {

  };
};

const mapDispatchToProps = function (dispatch) {

  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
