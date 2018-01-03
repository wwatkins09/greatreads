import React from 'react';

class NewUserForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createUser(this.state);
  }

  render() {
    return (
      <div>
        <h3>Don't have an account? Sign up for free now!</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input onChange={this.handleChange('username')} type="text" value={this.state.username}></input>
          </label>
          <label>Password:
            <input onChange={this.handleChange('password')} type="password" value={this.state.password}></input>
          </label>
          <button>Sign Up!</button>

        </form>
      </div>
    );
  }

}

export default NewUserForm;
