import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import NewUserFormContainer from './user/new_user_form_container';
import UserShowContainer from './user/user_show_container';
import Mainpage from './main_page';

const App = () => {
  return (
  <div className="app">
    <Route path="/" component={NavBarContainer} />
    <Mainpage />
  </div>
  );
};

export default App;
