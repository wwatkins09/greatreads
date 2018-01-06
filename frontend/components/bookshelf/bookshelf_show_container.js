import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import BookshelfShow from './bookshelf_show';
import {fetchBookshelf, deleteBookshelf, updateBookshelf, clearBookshelfErrors, fetchUserBookshelvesByBookshelfId} from '../../actions/bookshelf_actions';

const mapStateToProps = function(state, ownProps) {
  let bookshelf = state.entities.bookshelves[ownProps.match.params.bookshelfId];
  let bookshelves = [];
  let owner;
  let books = [];

  if (bookshelf) {
    owner = state.entities.users[bookshelf.userId];
    bookshelves = owner.bookshelfIds.map((bookshelfId) => {
      return state.entities.bookshelves[bookshelfId];
    });
    debugger
    books = bookshelf.bookIds.map((bookId) => {
      return state.entities.books[bookId];
    });
  } else {
    bookshelf = {name: ""};
    owner = {id: -1, username: ""};
  }



  return {
    bookshelfId: ownProps.match.params.bookshelfId,
    bookshelf,
    bookshelves,
    owner,
    currentUserId: state.session.currentUserId,
    bookshelfErrors: state.errors.bookshelf,
    books
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchUserBookshelvesByBookshelfId: (bookshelfId) => dispatch(fetchUserBookshelvesByBookshelfId(bookshelfId)),
    updateBookshelf: (bookshelf) => dispatch(updateBookshelf(bookshelf)),
    deleteBookshelf: (bookshelfId) => dispatch(deleteBookshelf(bookshelfId)),
    clearBookshelfErrors: () => dispatch(clearBookshelfErrors()),
    fetchBookshelf: (bookshelfId) => dispatch(fetchBookshelf(bookshelfId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookshelfShow));
