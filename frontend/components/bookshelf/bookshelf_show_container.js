import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import BookshelfShow from './bookshelf_show';
import {fetchBookshelf, deleteBookshelf, updateBookshelf, clearBookshelfErrors, fetchUserBookshelvesByBookshelfId} from '../../actions/bookshelf_actions';
import {fetchReviewsByUserId} from '../../actions/review_actions';
import {clearModals} from '../../actions/ui_actions';

const mapStateToProps = function(state, ownProps) {
  let bookshelf = state.entities.bookshelves[ownProps.match.params.bookshelfId];
  let bookshelves = [];
  let owner;
  let books = [];
  let reviews = [];

  if (bookshelf) {
    owner = state.entities.users[bookshelf.userId];
    bookshelves = owner.bookshelfIds.sort().map((bookshelfId) => {
      return state.entities.bookshelves[bookshelfId];
    });
    books = bookshelf.bookIds.map((bookId) => {
      return state.entities.books[bookId];
    });
  } else {
    bookshelf = {name: "", userId: null};
    owner = {id: -1, username: ""};
  }

  reviews = books.map((book) => {
    if (book && owner) {
      return Object.values(state.entities.reviews).find((review) => (review.bookId === book.id && review.userId === owner.id))
    }
  })




  return {
    bookshelfId: ownProps.match.params.bookshelfId,
    bookshelf,
    bookshelves,
    owner,
    currentUserId: state.session.currentUserId,
    bookshelfErrors: state.errors.bookshelf,
    books,
    reviews
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchUserBookshelvesByBookshelfId: (bookshelfId) => dispatch(fetchUserBookshelvesByBookshelfId(bookshelfId)),
    updateBookshelf: (bookshelf) => dispatch(updateBookshelf(bookshelf)),
    deleteBookshelf: (bookshelfId) => dispatch(deleteBookshelf(bookshelfId)),
    clearBookshelfErrors: () => dispatch(clearBookshelfErrors()),
    fetchBookshelf: (bookshelfId) => dispatch(fetchBookshelf(bookshelfId)),
    fetchReviewsByUserId: (userId) => dispatch(fetchReviewsByUserId(userId)),
    clearModals: () => dispatch(clearModals())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookshelfShow));
