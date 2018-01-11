import React from 'react';
import {Link} from 'react-router-dom';
import SignInFormContainer from '../session/sign_in_form_container';
import SignOutFormContainer from '../session/sign_out_form_container';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let component;
    let navLinks;
    let logoClassName;
    if (this.props.currentUserId) {
      logoClassName = 'logo-logged-in';
      component = <SignOutFormContainer />;
      navLinks = <span className="navbar-links">
        <div className="navbar-link-container">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-link-container">
          <Link to="/books">Books</Link>
        </div>
        <div className="navbar-link-random">

        </div>
      </span>;
    } else {
      logoClassName = 'logo-homepage';
      component = <SignInFormContainer />;
      navLinks = <span className="navbar-links"></span>;
    }
    return (
      <main className="navbar">
        <content className="navbar-left">
          <Link to="/" className={logoClassName}>

          </Link>
          <div className="navbar-links-container">
            {navLinks}
          </div>
        </content>
        <div className="navbar-form-container">
          {component}
        </div>

      </main>
    );
  }

}

export default NavBar;
