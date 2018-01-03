import {Route, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute}   from '../util/route_util.jsx';
import React from 'react';
import NewUserFormContainer from './user/new_user_form_container';
import UserShowContainer from './user/user_show_container';
import {connect} from 'react-redux';

const mapStateToProps = function (state) {
  return {
    currentUserId: state.session.currentUserId
  };
};


const MainPage = (props) => {
  if (props.currentUserId) {
    return (
      <div>
        <Route exact path="/" component={UserShowContainer} />
        <Route exact path="/users/:userId" component={UserShowContainer} />
      </div>
    );
  } else {
    return (
      <Route path="/" component={NewUserFormContainer} />
    );
  }
};

export default connect(mapStateToProps, null)(MainPage);
