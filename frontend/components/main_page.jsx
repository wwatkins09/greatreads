import {Route, Switch} from 'react-router-dom';
import React from 'react';
import NewUserFormContainer from './user/new_user_form_container';
import UserShowContainer from './user/user_show_container';

const MainPage = () => {
  return (
  <div>
    <Switch>
      <Route exact path="/" component={NewUserFormContainer} />
      <Route exact path="/users/:userId" component={UserShowContainer} />
    </Switch>
  </div>
  );
};

export default MainPage;
