import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import SignUp from './sign_up';
import {createUser} from '../../actions/user_actions';
import {clearSessionAndUserErrors} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    userErrors: state.errors.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user)),
    clearSessionAndUserErrors: () => dispatch(clearSessionAndUserErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
