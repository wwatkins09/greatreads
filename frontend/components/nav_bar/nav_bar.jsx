import React from 'react';
import SignInFormContainer from '../session/sign_in_form_container';
import SignOutFormContainer from '../session/sign_out_form_container';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let component;
    if (this.props.currentUser) {
      component = <SignOutFormContainer currentUser={this.props.currentUser} />;
    } else {
      component = <SignInFormContainer />;
    }
    return (
      <main className="sign-in">
        <p className="logo">
          greatreads
        </p>
        <div className="navbar-form-container">
          {component}
        </div>
      </main>
    );
  }

}

export default NavBar;
