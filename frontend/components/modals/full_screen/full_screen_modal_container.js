import {connect} from 'react-redux';
import FullScreenModal from './full_screen_modal';
import {clearModals} from '../../../actions/ui_actions';

const mapStateToProps = function (state) {
  return {
    toggled: state.ui.fullScreenModal
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    clearModals: () => dispatch(clearModals())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FullScreenModal);
