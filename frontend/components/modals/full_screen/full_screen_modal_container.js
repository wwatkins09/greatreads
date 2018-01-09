import {connect} from 'react-redux';
import FullScreenModal from './full_screen_modal';

const mapStateToProps = function (state) {
  return {
    toggled: state.ui.fullScreenModal
  };
};

export default connect(mapStateToProps, null)(FullScreenModal);
