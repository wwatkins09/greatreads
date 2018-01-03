import {connect} from 'react-redux';
import BookshelfIndex from './bookshelf_index.jsx';
import {fetchUserBookshelves} from '../../actions/bookshelf_actions';

const mapStateToProps = function (state) {
  return {
    bookshelves: Object.values(state.entities.bookshelves)
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchUserBookshelves: () => dispatch(fetchUserBookshelves())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookshelfIndex);
