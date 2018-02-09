import {connect} from 'react-redux';
import BookFullIndex from './book_full_index';
import {fetchAllBooks} from '../../actions/book_actions';
import {withRouter} from 'react-router-dom';
import {clearModals, toggleBookshelfModal} from '../../actions/ui_actions';
import {createBookshelfOwnership} from '../../actions/bookshelf_ownership_actions';
import {fetchReviewsByUserId} from '../../actions/review_actions';

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

  let userReviews;

  if (state.entities.users[state.session.currentUserId]) {
    userReviews = state.entities.users[state.session.currentUserId].reviewIds.map((review) => {
      return state.entities.reviews[review.id];
    })
  }

  return {
    books: state.entities.books,
    userBookshelves,
    wantToReadBookshelf,
    currentUserId: state.session.currentUserId,
    toggled: state.ui.bookshelfModal,
    userReviews
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchAllBooks: () => dispatch(fetchAllBooks()),
    clearModals: () => dispatch(clearModals()),
    toggleBookshelfModal: () => dispatch(toggleBookshelfModal()),
    createBookshelfOwnership: (bookshelfOwnership) => dispatch(createBookshelfOwnership(bookshelfOwnership)),
    fetchReviewsByUserId: (userId) => dispatch(fetchReviewsByUserId(userId))

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookFullIndex));
