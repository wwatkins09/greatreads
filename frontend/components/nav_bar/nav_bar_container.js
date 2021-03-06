import {connect} from 'react-redux';
import NavBar from './nav_bar';
import {signIn} from '../../actions/session_actions';

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
