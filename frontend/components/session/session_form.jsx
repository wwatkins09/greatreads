import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {username: "", password: ""};
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.action({username: this.state.username, password: this.state.password});
  }

  handleChange(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    };
  }

  render() {
    if (this.props.currentUser) {
      return (
        <button onClick={this.handleSubmit}>Logout!</button>
        );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input onChange={this.handleChange('username')} type="text" value={this.state.text}></input>
          </label>
          <label>Password:
            <input onChange={this.handleChange('password')} type="password" value={this.state.password}></input>
          </label>
          <button>Log In!</button>
        </form>
      );
    }
  }
}

export default SessionForm;
