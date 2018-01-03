import {connect} from 'react-redux';
import NavBar from './nav_bar';

const mapStateToProps = function (state) {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
