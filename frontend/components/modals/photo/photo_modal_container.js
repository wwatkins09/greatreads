import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {updateUserPhoto} from '../../../actions/user_actions';
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
    updateUserPhoto: (formData) => dispatch(updateUserPhoto(formData))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoModal));
