import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ReviewModal from './review_modal';
import {createReview, clearReviewErrors} from '../../../actions/review_actions';
import {toggleReviewModal} from '../../../actions/ui_actions';

const mapStateToProps = function (state, ownProps) {
  return {
    book: ownProps.book,
    currentUserId: state.session.currentUserId,
    toggled: state.ui.reviewModal,
    errors: state.errors.review,
    review: ownProps.review
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    createReview: (review) => dispatch(createReview(review)),
    toggleReviewModal: () => dispatch(toggleReviewModal()),
    clearReviewErrors: () => dispatch(clearReviewErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewModal));
