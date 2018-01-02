import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './nav_bar';
import NewUserFormContainer from './user/new_user_form_container';
import UserShowContainer from './user/user_show_container';

const App = () => {
  return (
  <div>
    <Switch>
      <Route path="/" component={NavBar} />
    </Switch>
    <Mainpage />
  </div>
  );
};

export default App;
