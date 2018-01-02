import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './nav_bar';
import NewUserFormContainer from './user/new_user_form_container';
import UserShowContainer from './user/user_show_container';

const App = () => {
  <div>
    <Switch>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={NewUserFormContainer} />
      <Route exact path="/users/:userId" component={UserShowContainer} />
    </Switch>
  </div>;
};

export default App;
