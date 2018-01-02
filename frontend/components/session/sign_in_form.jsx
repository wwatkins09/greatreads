import React from 'react';

class SignInForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.signIn(this.state);
  }

  render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input className="input-field" onChange={this.handleChange('username')} type="text" value={this.state.text}></input>
          </label>
          <label>Password:
            <input className="input-field" onChange={this.handleChange('password')} type="password" value={this.state.password}></input>
          </label>
          <button className="button">Log In!</button>
        </form>
      );
    }
  }

export default SignInForm;
