import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {updateUserPhoto, clearPhotoErrors} from '../../../actions/user_actions';
import {togglePhotoModal} from '../../../actions/ui_actions';
import PhotoModal from './photo_modal';

const mapStateToProps = function (state, ownProps) {
  return {
    userId: ownProps.match.params.bookId,
    user: ownProps.user,
    toggled: state.ui.photoModal,
    errors: state.errors.user
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    updateUserPhoto: (formData) => dispatch(updateUserPhoto(formData)),
    togglePhotoModal: () => dispatch(togglePhotoModal()),
    clearPhotoErrors: () => dispatch(clearPhotoErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoModal));
