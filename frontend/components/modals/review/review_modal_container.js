import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ReviewModal from './review_modal';
import {createReview} from '../../../actions/review_actions';

const mapStateToProps = function (state, ownProps) {
  return {
    book: ownProps.book,
    currentUserId: state.session.currentUserId
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    createReview: (review) => dispatch(createReview(review))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewModal));
