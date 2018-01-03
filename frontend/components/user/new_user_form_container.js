import {connect} from 'react-redux';
import NewUserForm from './new_user_form';
import {createUser} from '../../actions/user_actions';


const mapStateToProps = function(state) {
  return {
    userErrors: state.errors.user
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    createUser: (user) => dispatch(createUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);
