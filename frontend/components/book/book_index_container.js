import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import BookIndex from './book_index';
import {fetchBooksByBookshelfId, fetchAllBooks} from '../../actions/book_actions';
import {deleteBookshelfOwnership} from '../../actions/bookshelf_ownership_actions';
import {fetchReviewsByUserId, createReview, updateReview} from '../../actions/review_actions';

const mapStateToProps = function (state, ownProps) {

  const currentUserId = state.session.currentUserId;

  const bookshelfId = parseInt(ownProps.match.params.bookshelfId);
  let bookshelfBooks = [];
  let bookshelf;
  let books = [];
  if (bookshelfId && state.entities.bookshelves[bookshelfId]) {
    bookshelf = state.entities.bookshelves[bookshelfId];
    bookshelfBooks = bookshelf.bookIds.map((bookId) => {
      return state.entities.books[bookId];
    });
  } else {
    bookshelfBooks = null;
    books = Object.values(state.entities.books);
  }

  let reviews;
  if (ownProps.reviews) {
    reviews = ownProps.reviews;
  } else {
    reviews = books.map((book) => {
      if (book) {
        return Object.values(state.entities.reviews).find((review) => (review.bookId === book.id && review.userId === currentUserId))
      }
    })
  }

  return {
    bookshelfId,
    bookshelf,
    bookshelfBooks,
    books,
    currentUserId,
    reviews
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchBooksByBookshelfId: (bookshelfId) => dispatch(fetchBooksByBookshelfId(bookshelfId)),
    fetchAllBooks: () => dispatch(fetchAllBooks()),
    deleteBookshelfOwnership: (args) => dispatch(deleteBookshelfOwnership(args)),
    fetchReviewsByUserId: (userId) => dispatch(fetchReviewsByUserId(userId)),
    createReview: (review) => dispatch(createReview(review)),
    updateReview: (review) => dispatch(updateReview(review))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookIndex));
