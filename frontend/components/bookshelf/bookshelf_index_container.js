import {connect} from 'react-redux';
import BookshelfIndex from './bookshelf_index.jsx';
import {fetchUserBookshelves, createBookshelf} from '../../actions/bookshelf_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = function (state, ownProps) {
  let userId;
  if (ownProps.match.params.userId) {
    userId = parseInt(ownProps.match.params.userId);
  } else {
    userId = state.session.currentUserId;
  }
  let userBookshelves;
  if (Object.keys(state.entities.bookshelves).length > 0) {
    userBookshelves = state.entities.users[userId].bookshelf_ids.map((bookshelfId) => {
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
    createBookshelf: (bookshelf) => dispatch(createBookshelf(bookshelf))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookshelfIndex));
