import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';
import NewUserFormContainer from './user/new_user_form_container';
import UserShowContainer from './user/user_show_container';
import Mainpage from './main_page';
import FullScreenModalContainer from './modals/full_screen/full_screen_modal_container';
import Footer from './footer/footer';

const App = () => {
  return (
  <div className="app">
    <FullScreenModalContainer />
    <Route path="/" component={NavBarContainer} />
    <Mainpage />
    <Route path="/" component={Footer} />
  </div>
  );
};

export default App;
