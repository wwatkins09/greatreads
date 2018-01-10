import {connect} from 'react-redux';
import BookShow from './book_show';
import {fetchBook} from '../../actions/book_actions';
import {fetchUserBookshelves} from '../../actions/bookshelf_actions';
import {createBookshelfOwnership, fetchBookshelfOwnershipsByBookId, fetchBookshelfOwnershipsByBookshelfId, clearBookshelfOwnershipErrors} from '../../actions/bookshelf_ownership_actions';
import {toggleReviewModal} from '../../actions/ui_actions';
import {withRouter} from 'react-router-dom';
import {clearReviewErrors} from '../../actions/review_actions';

const mapStateToProps = function (state, ownProps) {
  let book = state.entities.books[ownProps.match.params.bookId];
  let userBookshelves;
  let bookReviews = [];
  let currentUserReview;
    if (book) {
      bookReviews = book.reviewIds.map((reviewId) => {
        return state.entities.reviews[reviewId];
      });
    } else {
      book = {id: null, title: "", author: "", year: null, coverUrl: ""};
    }
    if (state.entities.users[state.session.currentUserId]) {
      userBookshelves = state.entities.users[state.session.currentUserId].bookshelfIds.map((bookshelfId) => {
        return (
          state.entities.bookshelves[bookshelfId]
        );
      });
    }

      currentUserReview = bookReviews.filter((review) => review && review.userId === state.session.currentUserId)[0];

  return {
    bookId: ownProps.match.params.bookId,
    book,
    bookReviews,
    currentUserId: state.session.currentUserId,
    userBookshelves,
    bookshelfOwnershipErrors: state.errors.bookshelfOwnership,
    currentUserReview
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchBook: (bookId) => dispatch(fetchBook(bookId)),
    fetchUserBookshelves: (userId) => dispatch(fetchUserBookshelves(userId)),
    createBookshelfOwnership: (bookshelfOwnership) => dispatch(createBookshelfOwnership(bookshelfOwnership)),
    fetchBookshelfOwnershipsByBookId: (bookId) => dispatch(fetchBookshelfOwnershipsByBookId(bookId)),
    fetchBookshelfOwnershipsByBookshelfId: (bookshelfId) => dispatch(fetchBookshelfOwnershipsByBookshelfId(bookshelfId)),
    clearBookshelfOwnershipErrors: () => dispatch(clearBookshelfOwnershipErrors()),
    toggleReviewModal: () => dispatch(toggleReviewModal()),
    clearReviewErrors: () => dispatch(clearReviewErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookShow));
