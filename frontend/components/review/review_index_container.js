import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ReviewIndex from './review_index';
import {fetchReviewsByBookId, deleteReview, clearReviewErrors} from '../../actions/review_actions';
import {toggleReviewModal} from '../../actions/ui_actions';

const mapStateToProps = function (state, ownProps) {
  const bookId = parseInt(ownProps.match.params.bookId);
  let bookReviews = [];
  let book;
  if (state.entities.books[bookId]) {
    book = state.entities.books[bookId];
    bookReviews = book.reviewIds.map((reviewId) => {
      return state.entities.reviews[reviewId];
    });
  }


  return {
    currentUserId: state.session.currentUserId,
    bookId,
    book,
    bookReviews,
    users: state.entities.users
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchReviewsByBookId: (bookId) => dispatch(fetchReviewsByBookId(bookId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    toggleReviewModal: () => dispatch(toggleReviewModal()),
    clearReviewErrors: () => dispatch(clearReviewErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex));
