import {connect} from 'react-redux';
import UserShow from './user_show';
import {fetchCurrentUser} from '../../actions/session_actions';

const mapStateToProps = function (state, ownProps) {
  return {
    user: state.entities.users[ownProps.match.params.userId]
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
