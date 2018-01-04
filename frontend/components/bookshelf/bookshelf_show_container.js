import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import BookshelfShow from './bookshelf_show';
import {fetchBookshelf, deleteBookshelf, updateBookshelf} from '../../actions/bookshelf_actions';

const mapStateToProps = function(state, ownProps) {
  let bookshelf = state.entities.bookshelves[ownProps.match.params.bookshelfId];
  if (!bookshelf) {
    bookshelf = {name: ""};
  }
  return {
    bookshelfId: ownProps.match.params.bookshelfId,
    bookshelf,
    currentUserId: state.session.currentUserId,
    bookshelfErrors: state.errors.bookshelf
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchBookshelf: (bookshelfId) => dispatch(fetchBookshelf(bookshelfId)),
    updateBookshelf: (bookshelf) => dispatch(updateBookshelf(bookshelf)),
    deleteBookshelf: (bookshelfId) => dispatch(deleteBookshelf(bookshelfId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookshelfShow));
