import {connect} from 'react-redux';
import BookIndex from './book_index';
import {fetchAllBooks} from '../../actions/book_actions';
import {withRouter} from 'react-router-dom';
import {clearModals} from '../../actions/ui_actions';
import {fetchReviewsByUserId, createReview, updateReview} from '../../actions/review_actions';

const mapStateToProps = function (state) {

  let userBookshelves;
  let wantToReadBookshelf;
  if (state.entities.users[state.session.currentUserId]) {
    userBookshelves = state.entities.users[state.session.currentUserId].bookshelfIds.sort().map((bookshelfId) => {
      if (state.entities.bookshelves[bookshelfId] && state.entities.bookshelves[bookshelfId].name === "Want to Read") {
        wantToReadBookshelf = state.entities.bookshelves[bookshelfId];
      }
      return (
        state.entities.bookshelves[bookshelfId]
      );
    });
  }

  let reviews;

  if (state.entities.users[state.session.currentUserId]) {
    reviews = state.entities.users[state.session.currentUserId].reviewIds.map((reviewId) => {
      return state.entities.reviews[reviewId];
    })
  }

  return {
    books: state.entities.books,
    userBookshelves,
    wantToReadBookshelf,
    currentUserId: state.session.currentUserId,
    reviews
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchAllBooks: () => dispatch(fetchAllBooks()),
    clearModals: () => dispatch(clearModals()),
    toggleBookshelfModal: () => dispatch(toggleBookshelfModal()),
    createBookshelfOwnership: (bookshelfOwnership) => dispatch(createBookshelfOwnership(bookshelfOwnership)),
    fetchReviewsByUserId: (userId) => dispatch(fetchReviewsByUserId(userId)),
    createReview: (review) => dispatch(createReview(review)),
    updateReview: (review) => dispatch(updateReview(review))

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookIndex));
