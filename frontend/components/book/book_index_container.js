import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import BookIndex from './book_index';
import {fetchBooksByBookshelfId} from '../../actions/book_actions';
import {deleteBookshelfOwnership} from '../../actions/bookshelf_ownership_actions';

const mapStateToProps = function (state, ownProps) {
  const bookshelfId = parseInt(ownProps.match.params.bookshelfId);
  let bookshelfBooks = [];
  if (state.entities.bookshelves[bookshelfId]) {
    bookshelfBooks = state.entities.bookshelves[bookshelfId].bookIds.map((bookId) => {
      return state.entities.books[bookId];
    });
  }
  return {
    bookshelfId,
    bookshelfBooks
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchBooksByBookshelfId: (bookshelfId) => dispatch(fetchBooksByBookshelfId(bookshelfId)),
    deleteBookshelfOwnership: (bookshelfOwnershipId) => dispatch(deleteBookshelfOwnership(bookshelfOwnershipId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookIndex));
