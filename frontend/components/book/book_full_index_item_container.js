import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import BookFullIndexItem from './book_full_index_item';
import {createBookshelfOwnership} from '../../actions/bookshelf_ownership_actions';
import {toggleBookshelfModal} from '../../actions/ui_actions';
import {createReview, updateReview} from '../../actions/review_actions';

const mapStateToProps = function (state, ownProps) {
  return {
    book: ownProps.book,
    key: ownProps.book.id,
    num: ownProps.num,
    toggled: state.ui.bookshelfModal,
    userBookshelves: ownProps.userBookshelves,
    wantToReadBookshelf: ownProps.wantToReadBookshelf,
    currentUserId: state.session.currentUserId
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    toggleBookshelfModal: () => dispatch(toggleBookshelfModal()),
    createBookshelfOwnership: (bookshelfOwnership) => dispatch(createBookshelfOwnership(bookshelfOwnership)),
    createReview: (review) => dispatch(createReview(review)),
    updateReview: (review) => dispatch(updateReview(review))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookFullIndexItem))
