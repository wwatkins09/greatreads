import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import BookIndexItem from './book_index_item';
import {createBookshelfOwnership, deleteBookshelfOwnership} from '../../actions/bookshelf_ownership_actions';
import {toggleBookshelfModal} from '../../actions/ui_actions';
import {createReview, updateReview} from '../../actions/review_actions';

const mapStateToProps = function (state, ownProps) {
  return {
    book: ownProps.book,
    bookshelf: ownProps.bookshelf,
    review: ownProps.review,
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
    updateReview: (review) => dispatch(updateReview(review)),
    deleteBookshelfOwnership: (bookshelfOwnershipId) => dispatch(deleteBookshelfOwnership(bookshelfOwnershipId))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookIndexItem))
