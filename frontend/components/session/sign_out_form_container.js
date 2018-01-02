import {connect} from 'react-redux';
import SignOutForm from './sign_out_form';
import {signOut} from '../../actions/session_actions';

const mapStateToProps = function (state) {
  return {

  };
};

const mapDispatchToProps = function (dispatch) {

  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignOutForm);
