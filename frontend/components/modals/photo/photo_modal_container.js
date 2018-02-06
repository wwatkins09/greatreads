import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PhotoModal from './photo_modal';

const mapStateToProps = function (state, ownProps) {
  return {
    userId: ownProps.match.params.bookId,
    user: ownProps.user,
    toggled: state.ui.photoModal
  };
};

const mapDispatchToProps = function (dispatch) {
  return {

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoModal));
