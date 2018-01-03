import {connect} from 'react-redux';
import BookshelfIndex from './bookshelf_index.jsx';
import {fetchBookshelves} from '../../actions/bookshelf_actions';

const mapStateToProps = function (state) {
  return {
    bookshelves: Object.values(state.entities.bookshelves)
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchBookshelves: () => dispatch(fetchBookshelves())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookshelfIndex);
