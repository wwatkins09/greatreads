import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import App from './app';
import {clearSearchBar} from '../../actions/ui_actions';

const mapStateToProps = function(state) {
  return {

  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    clearSearchBar: () => dispatch(clearSearchBar())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
