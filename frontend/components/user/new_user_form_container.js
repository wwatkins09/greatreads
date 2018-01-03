import {connect} from 'react-redux';
import NewUserForm from './new_user_form';
import {createUser} from '../../actions/session_actions';


const mapStateToProps = function(state) {
  return {

  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    createUser: (user) => dispatch(createUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);
