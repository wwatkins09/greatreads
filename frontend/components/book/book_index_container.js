import {connect} from 'react-redux';
import BookIndex from './book_index';
import {fetchBooks} from '../../actions/book_actions';

const mapStateToProps = function (state) {
  return {

  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchBooks: () => dispatch(fetchBooks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookIndex);
