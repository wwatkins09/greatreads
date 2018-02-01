import {connect} from 'react-redux';
import UserShow from './user_show';
import {fetchUser} from '../../actions/user_actions';
import {clearModals} from '../../actions/ui_actions';
import {fetchBookshelf} from '../../actions/bookshelf_actions';

const mapStateToProps = function (state, ownProps) {
  let userId;
  let title;
  let user;
  let readBookshelf = {name: "", bookIds: []};
  if (ownProps.match.params.userId) {
    userId = ownProps.match.params.userId;
    title = "'s page";
  } else {
    userId = state.session.currentUserId;
    title = "Welcome to your page, ";
  }
  if (state.entities.users[userId]) {
    user = state.entities.users[userId];
    if (state.entities.bookshelves[user.bookshelfIds[0]]) {
      readBookshelf = state.entities.bookshelves[user.bookshelfIds[0]];
    }
  } else {
    user = {username: ""};
  }
  return {
    user,
    userId,
    bookshelfErrors: state.errors.bookshelf,
    title,
    currentUserId: state.session.currentUserId,
    readBookshelf
    };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    clearModals: () => dispatch(clearModals()),
    fetchBookshelf: (bookshelfId) => dispatch(fetchBookshelf(bookshelfId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
