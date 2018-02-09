import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import App from './app';
import {clearSearchBar, clearBookshelfModal} from '../../actions/ui_actions';
import {fetchUserBookshelves} from '../../actions/bookshelf_actions';
import {fetchReviewsByUserId} from '../../actions/review_actions';

const mapStateToProps = function(state) {
  return {
    currentUserId: state.session.currentUserId
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    clearSearchBar: () => dispatch(clearSearchBar()),
    clearBookshelfModal: () => dispatch(clearBookshelfModal()),
    fetchUserBookshelves: (userId) => dispatch(fetchUserBookshelves(userId)),
    fetchReviewsByUserId: (userId) => dispatch(fetchReviewsByUserId(userId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
