import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import SearchBar from './search_bar';
import {fetchAllBooks} from '../../actions/book_actions';

const mapStateToProps = function(state) {
  return {
    books: state.entities.books
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchAllBooks: () => dispatch(fetchAllBooks())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
