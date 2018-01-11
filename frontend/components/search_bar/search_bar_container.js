import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import SearchBar from './search_bar';
import {fetchAllBooks} from '../../actions/book_actions';
import {toggleSearchBar} from '../../actions/ui_actions';

const mapStateToProps = function(state) {
  return {
    books: state.entities.books,
    toggled: state.ui.searchBar,
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchAllBooks: () => dispatch(fetchAllBooks()),
    toggleSearchBar: () => dispatch(toggleSearchBar()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
