import React from 'react';

class SignOutForm extends React.Component {

  render() {
    return (
      <div className="navbar-form">
        <button onClick={this.props.signOut}>Sign Out</button>
      </div>
    );
  }
}

export default SignOutForm;
