import {connect} from 'react-redux';
import BookshelfIndex from './bookshelf_index.jsx';
import {fetchUserBookshelves} from '../../actions/bookshelf_actions';

const mapStateToProps = function (state, ownProps) {
  let userId;
  if (ownProps.match) {
    userId = ownProps.match.params.userId;
  } else {
    userId = state.session.currentUserId;
  }
  return {
    userId
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchUserBookshelves: (userId) => dispatch(fetchUserBookshelves(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookshelfIndex);
