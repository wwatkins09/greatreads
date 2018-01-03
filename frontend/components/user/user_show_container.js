import {connect} from 'react-redux';
import UserShow from './user_show';
import {fetchUser} from '../../actions/user_actions';

const mapStateToProps = function (state, ownProps) {
  let userId;
  if (ownProps.match.params.userId) {
    userId = ownProps.match.params.userId;
  } else {
    userId = state.session.currentUserId;
  }
  return {
    user: state.entities.users[userId] || {username: ""},
    userId
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
