import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import BookFullIndexItem from './book_full_index_item';
import {createBookshelfOwnership} from '../../actions/bookshelf_ownership_actions';
import {toggleBookshelfModal} from '../../actions/ui_actions';

const mapStateToProps = function (state, ownProps) {
  return {
    book: ownProps.book,
    key: ownProps.book.id,
    num: ownProps.num,
    toggled: state.ui.bookshelfModal,
    userBookshelves: ownProps.userBookshelves,
    wantToReadBookshelf: ownProps.wantToReadBookshelf
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    toggleBookshelfModal: () => dispatch(toggleBookshelfModal()),
    createBookshelfOwnership: (bookshelfOwnership) => dispatch(createBookshelfOwnership(bookshelfOwnership)),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookFullIndexItem))
