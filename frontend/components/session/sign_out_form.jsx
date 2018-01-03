import React from 'react';

class SignOutForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-form">
        <p>Hello, {this.props.currentUser.username}</p>
        <button onClick={this.props.signOut}>Sign Out</button>
      </div>
    );
  }
}

export default SignOutForm;
