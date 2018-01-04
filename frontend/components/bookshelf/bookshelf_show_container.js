import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import BookshelfShow from './bookshelf_show';
import {fetchBookshelf, deleteBookshelf} from '../../actions/bookshelf_actions';

const mapStateToProps = function(state, ownProps) {
  let bookshelf = state.entities.bookshelves[ownProps.match.params.bookshelfId];
  if (!bookshelf) {
    bookshelf = {name: ""};
  }
  return {
    bookshelfId: ownProps.match.params.bookshelfId,
    bookshelf
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchBookshelf: (bookshelfId) => dispatch(fetchBookshelf(bookshelfId)),
    editBookshelf: (bookshelf) => dispatch(editBookshelf(bookshelf)),
    deleteBookshelf: (bookshelfId) => dispatch(fetchBookshelf(bookshelfId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookshelfShow));
