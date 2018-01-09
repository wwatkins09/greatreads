import {connect} from 'react-redux';
import BookshelfIndex from './bookshelf_index.jsx';
import {fetchUserBookshelves, createBookshelf, clearBookshelfErrors} from '../../actions/bookshelf_actions';
import {withRouter} from 'react-router-dom';

  const sortNumber = function (a,b) {
    return a - b;
  };

const mapStateToProps = function (state, ownProps) {
  let userId;
  if (ownProps.match.params.userId) {
    userId = parseInt(ownProps.match.params.userId);
  } else {
    userId = state.session.currentUserId;
  }
  let userBookshelves = [];
  if (state.entities.users[userId]) {
    userBookshelves = state.entities.users[userId].bookshelfIds.sort(sortNumber).map((bookshelfId) => {
      return state.entities.bookshelves[bookshelfId];
    });
    }

  return {
    userId,
    currentUserId: state.session.currentUserId,
    userBookshelves
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchUserBookshelves: (userId) => dispatch(fetchUserBookshelves(userId)),
    createBookshelf: (bookshelf) => dispatch(createBookshelf(bookshelf)),
    clearBookshelfErrors: () => dispatch(clearBookshelfErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookshelfIndex));
