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
    if (this.props.currentUserId) {
      component = <SignOutFormContainer />;
      navLinks = <span className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
      </span>;
    } else {
      component = <SignInFormContainer />;
      navLinks = <span className="navbar-links"></span>;
    }
    return (
      <main className="navbar">
        <content className="navbar-left">
          <Link to="/" className="logo">
            
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
