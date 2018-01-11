import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import NavBarContainer from '../nav_bar/nav_bar_container';
import NewUserFormContainer from '../user/new_user_form_container';
import UserShowContainer from '../user/user_show_container';
import Mainpage from '../main_page';
import FullScreenModalContainer from '../modals/full_screen/full_screen_modal_container';
import Footer from '../footer/footer';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.closeSearchBar = this.closeSearchBar.bind(this);
  }

  closeSearchBar() {
    this.props.clearSearchBar();
  }

  render() {
    return (
    <div className="app" onClick={this.closeSearchBar}>
      <FullScreenModalContainer />
      <Route path="/" component={NavBarContainer} />
      <Mainpage />
      <Route path="/" component={Footer} />
    </div>
    );
  }

}

export default App;
