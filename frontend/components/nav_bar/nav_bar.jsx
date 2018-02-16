import React from 'react';
import {Link} from 'react-router-dom';
import SignInFormContainer from '../session/sign_in_form_container';
import SignOutFormContainer from '../session/sign_out_form_container';
import SearchBarContainer from '../search_bar/search_bar_container';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let sessionLinks;
    let navLinks;
    if (this.props.currentUserId) {
      sessionLinks = (<SignOutFormContainer />);
      navLinks = <span className="navbar-links">
        <div className="navbar-link-container">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-link-container">
          <Link to="/books">Books</Link>
        </div>
        <div className="navbar-search-bar">
          <SearchBarContainer />
        </div>
      </span>;
    } else {
      sessionLinks = (<span className="nav-session-links">
        <Link to="/signin">Sign in</Link>
        <Link to="/signup">Sign up</Link>
      </span>);
      navLinks = <span className="navbar-links"></span>;
    }
    return (
      <main className="navbar">
        <content className="navbar-left">
          <div className="navbar-links-container">
            {navLinks}
          </div>
        </content>
        <div className="navbar-form-container">
          {sessionLinks}
        </div>

      </main>
    );
  }

}

export default NavBar;
