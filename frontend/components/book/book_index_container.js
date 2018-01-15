import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import BookIndex from './book_index';
import {fetchBooksByBookshelfId} from '../../actions/book_actions';
import {deleteBookshelfOwnership} from '../../actions/bookshelf_ownership_actions';
import {fetchReviewsByUserId} from '../../actions/review_actions';

const mapStateToProps = function (state, ownProps) {
  const bookshelfId = parseInt(ownProps.match.params.bookshelfId);
  let bookshelfBooks = [];
  let bookshelf;
  if (state.entities.bookshelves[bookshelfId]) {
    bookshelf = state.entities.bookshelves[bookshelfId];
    bookshelfBooks = bookshelf.bookIds.map((bookId) => {
      return state.entities.books[bookId];
    });
  }
  return {
    bookshelfId,
    bookshelf,
    bookshelfBooks,
    currentUserId: state.session.currentUserId,
    reviews: ownProps.reviews
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchBooksByBookshelfId: (bookshelfId) => dispatch(fetchBooksByBookshelfId(bookshelfId)),
    deleteBookshelfOwnership: (args) => dispatch(deleteBookshelfOwnership(args)),
    fetchReviewsByUserId: (userId) => dispatch(fetchReviewsByUserId(userId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookIndex));
