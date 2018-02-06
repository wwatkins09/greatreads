import {connect} from 'react-redux';
import UserShow from './user_show';
import {fetchUser, clearPhotoErrors} from '../../actions/user_actions';
import {clearModals, togglePhotoModal} from '../../actions/ui_actions';
import {fetchBookshelf} from '../../actions/bookshelf_actions';
import {fetchBook} from '../../actions/book_actions';

const mapStateToProps = function (state, ownProps) {
  let userId;
  let title;
  let user;
  let currentBookId;
  let currentBook;
  let readBookshelf = {name: "", bookIds: []};
  if (!ownProps.match.params.userId || parseInt(ownProps.match.params.userId) === state.session.currentUserId) {
    userId = state.session.currentUserId;
    title = "Welcome to your page, ";
  } else {
    userId = ownProps.match.params.userId;
    title = "'s page";
  }
  if (state.entities.users[userId]) {
    user = state.entities.users[userId];
    if (state.entities.bookshelves[user.bookshelfIds[0]]) {
      readBookshelf = state.entities.bookshelves[user.bookshelfIds[0]];
      if (state.entities.bookshelves[user.bookshelfIds[1]]) {
        currentBookId = state.entities.bookshelves[user.bookshelfIds[1]].bookIds[0];
        if (state.entities.bookshelves[user.bookshelfIds[1]].bookIds.length > 0) {
          currentBook = state.entities.books[state.entities.bookshelves[user.bookshelfIds[1]].bookIds[0]];
        }
      }
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
    readBookshelf,
    currentBookId,
    currentBook
    };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    clearModals: () => dispatch(clearModals()),
    fetchBookshelf: (bookshelfId) => dispatch(fetchBookshelf(bookshelfId)),
    fetchBook: (bookId) => dispatch(fetchBook(bookId)),
    togglePhotoModal: () => dispatch(togglePhotoModal()),
    clearPhotoErrors: () => dispatch(clearPhotoErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
