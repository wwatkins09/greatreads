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
    if (this.props.currentUserId) {
      component = <SignOutFormContainer />;
    } else {
      component = <SignInFormContainer />;
    }
    return (
      <main className="navbar">
        <Link to="/" className="logo">
          greatreads
        </Link>
        <div className="navbar-form-container">
          {component}
        </div>

      </main>
    );
  }

}

export default NavBar;
