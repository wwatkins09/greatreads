import {connect} from 'react-redux';
import NavBar from './nav_bar';

const mapStateToProps = function (state) {
  return {
    currentUserId: state.session.currentUserId,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
