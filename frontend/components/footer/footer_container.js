import {connect} from 'react-redux';
import Footer from './footer';

const mapStateToProps = function (state) {
  return {
    currentUserId: state.session.currentUserId
  };
};

export default connect(mapStateToProps, null)(Footer);
