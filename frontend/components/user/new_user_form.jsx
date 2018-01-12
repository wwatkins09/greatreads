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
    this.setState({username: "", password: ""})
  }

  componentWillUnmount() {
    this.props.clearSessionAndUserErrors();
  }

  render() {
    const errorsList = this.props.userErrors.map((error, idx) => {
      return (<li className="user-error" key={idx}>{error}</li>);
    });
    return (
      <div className="signup">
        <content className="homepage-quote">
          <p className="homepage-quote-text">​‌“I have always imagined Paradise as a kind of library.”</p>
          <p className="homepage-quote-author">Jorge Luis Borges</p>
        </content>
        <content className="signup-content">
          <p>Don't have an account?</p>
          <p>Sign up now for free!</p>
          <form  className="signup-form" onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange('username')} type="text" value={this.state.username} placeholder="Username"></input>
              <input onChange={this.handleChange('password')} type="password" value={this.state.password} placeholder="Password"></input>
            <button className="signup-button">Sign Up</button>

          </form>
          <ul className="user-errors-list">{errorsList}</ul>
        </content>
      </div>
    );
  }

}

export default NewUserForm;
