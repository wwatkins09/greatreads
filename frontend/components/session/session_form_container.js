import {connect} from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = function (state) {
  let currentUser;
  let formType;
  if (state.session.currentUser) {
    currentUser = state.session.currentUser;
    formType = "Logout";
  } else {
    formType = "Login";
  }
  return {
    currentUser, formType
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  let action;

  return {
    action
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
