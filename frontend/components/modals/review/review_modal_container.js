import {connect} from 'react-redux';
import ReviewModal from './review_modal';

const mapStateToProps = function (state, {book}) {
  return {
    book
  };
};

const mapDispatchToProps = function (dispatch) {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewModal);
