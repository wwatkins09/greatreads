import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import BookIndex from './book_index';
import {fetchBooksByBookshelfId} from '../../actions/book_actions';

const mapStateToProps = function (state, ownProps) {
  const bookshelfId = ownProps.match.params.bookshelfId;
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
    fetchBooksByBookshelfId: (bookshelfId) => dispatch(fetchBooksByBookshelfId(bookshelfId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookIndex));
