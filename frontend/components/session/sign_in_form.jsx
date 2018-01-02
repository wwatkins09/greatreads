import React from 'react';

class SignInForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
  }

  handleChange(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    };
  }

  render() {
      return (
        <form onSubmit={() => this.props.signIn(this.state)}>
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

export default SignInForm;
