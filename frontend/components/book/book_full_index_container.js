import {connect} from 'react-redux';
import BookFullIndex from './book_full_index';
import {fetchAllBooks} from '../../actions/book_actions';
import {withRouter} from 'react-router-dom';
import {clearModals, toggleBookshelfModal} from '../../actions/ui_actions';

const mapStateToProps = function (state) {
  return {
    books: state.entities.books
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchAllBooks: () => dispatch(fetchAllBooks()),
    clearModals: () => dispatch(clearModals()),
    toggleBookshelfModal: () => dispatch(toggleBookshelfModal())

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookFullIndex));
