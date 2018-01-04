import React from 'react';
import {Redirect} from 'react-router-dom';

class SignOutForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signOut();
    return (<Redirect to="/" />);
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
