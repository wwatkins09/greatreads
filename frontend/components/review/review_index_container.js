import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ReviewIndex from './review_index';
import {fetchReviewsByBookId} from '../../actions/review_actions';

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
    bookReviews
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchReviewsByBookId: (bookId) => dispatch(fetchReviewsByBookId(bookId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex));
