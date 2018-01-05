import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import BookIndex from './book_index';
import {fetchBooksByBookshelfId} from '../../actions/book_actions';

const mapStateToProps = function (state) {
  return {
    books: state.entities.books
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchBooksByBookshelfId: (bookshelfId) => dispatch(fetchBooksByBookshelfId(bookshelfId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookIndex));
