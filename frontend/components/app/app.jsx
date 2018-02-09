import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import NavBarContainer from '../nav_bar/nav_bar_container';
import NewUserFormContainer from '../user/new_user_form_container';
import UserShowContainer from '../user/user_show_container';
import Mainpage from '../main_page';
import FullScreenModalContainer from '../modals/full_screen/full_screen_modal_container';
import FooterContainer from '../footer/footer_container';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.closeModals = this.closeModals.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUserId) {
      this.props.fetchUserBookshelves(this.props.currentUserId).then(() => {
        this.props.fetchReviewsByUserId(this.props.currentUserId);
      });
    }
  }

  closeModals(event) {
    this.props.clearSearchBar();
    if (event.target.innerHTML != '▼') {
      this.props.clearBookshelfModal();
    }
  }

  render() {
    return (
    <div className="app" onClick={this.closeModals}>
      <FullScreenModalContainer />
      <Route path="/" component={NavBarContainer} />
      <Mainpage />
      <Route path="/" component={FooterContainer} />
    </div>
    );
  }

}

export default App;
