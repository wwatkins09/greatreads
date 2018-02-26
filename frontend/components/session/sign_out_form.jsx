import React from 'react';
import {Redirect} from 'react-router-dom';

class SignOutForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signOut().then(() => {
      this.props.history.push('/');
    });
  }

  render() {
    return (
      <div className="signout">
        <p>Hello, {this.props.currentUser.username}</p>
        <button className="signout-button" onClick={this.props.signOut}>Sign Out</button>
      </div>
    );
  }
}

export default SignOutForm;
