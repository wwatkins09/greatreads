import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import BookshelfShow from './bookshelf_show';
import {fetchBookshelf, deleteBookshelf, updateBookshelf, clearBookshelfErrors} from '../../actions/bookshelf_actions';

const mapStateToProps = function(state, ownProps) {
  let bookshelf = state.entities.bookshelves[ownProps.match.params.bookshelfId];
  let owner;
  if (bookshelf && state.entities.users[bookshelf.userId]) {
    owner = state.entities.users[bookshelf.userId];
  } else {
    bookshelf = {name: ""};
    owner = {username: ""};
  }
  return {
    bookshelfId: ownProps.match.params.bookshelfId,
    bookshelf,
    owner,
    currentUserId: state.session.currentUserId,
    bookshelfErrors: state.errors.bookshelf,
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchBookshelf: (bookshelfId) => dispatch(fetchBookshelf(bookshelfId)),
    updateBookshelf: (bookshelf) => dispatch(updateBookshelf(bookshelf)),
    deleteBookshelf: (bookshelfId) => dispatch(deleteBookshelf(bookshelfId)),
    clearBookshelfErrors: () => dispatch(clearBookshelfErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookshelfShow));
