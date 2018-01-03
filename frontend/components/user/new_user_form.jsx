import React from 'react';

class NewUserForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {

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
    console.log(this.props.userErrors);
    const errorsList = this.props.userErrors.map((error, idx) => {
      return (<li className="user-error" key={idx}>{error}</li>);
    });
    return (
      <div className="signup">
        <content className="signup-content">
          <h3>Don't have an account? Sign up now for free!</h3>
          <form  className="signup-form" onSubmit={this.handleSubmit}>
            <label>Username:
              <input onChange={this.handleChange('username')} type="text" value={this.state.username}></input>
            </label>
            <label>Password:
              <input onChange={this.handleChange('password')} type="password" value={this.state.password}></input>
            </label>
            <button className="signup-button">Sign Up!</button>

          </form>
          <ul className="user-errors-list">{errorsList}</ul>
        </content>
      </div>
    );
  }

}

export default NewUserForm;
