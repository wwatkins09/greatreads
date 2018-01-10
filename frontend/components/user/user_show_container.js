import {connect} from 'react-redux';
import UserShow from './user_show';
import {fetchUser} from '../../actions/user_actions';

const mapStateToProps = function (state, ownProps) {
  let userId;
  let title;
  if (ownProps.match.params.userId) {
    userId = ownProps.match.params.userId;
    title = "'s page";
  } else {
    userId = state.session.currentUserId;
    title = "Welcome to your page, ";
  }
  return {
    user: state.entities.users[userId] || {username: ""},
    userId,
    bookshelfErrors: state.errors.bookshelf,
    title,
    currentUserId: state.session.currentUserId
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
