import {connect} from 'react-redux';
import UserShow from './user_show';
import {fetchCurrentUser} from '../../actions/session_actions';

const mapStateToProps = function (state, ownProps) {
  return {
    user: 2
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
