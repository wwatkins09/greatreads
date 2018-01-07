import React from 'react';

class SignInForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDemoSignin = this.handleDemoSignin.bind(this);
  }

  handleChange(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    };
  }


  handleSubmit(event) {
    event.preventDefault();

    this.props.signIn(this.state).then(() => {}, () => {
      this.setState( {username: "", password: ""} )
      });
  }

  handleDemoSignin(event) {
    event.preventDefault();

    this.props.signIn({username: "Demo User", password: "starwars"})
  }

  componentWillUnmount() {
    this.props.clearSessionAndUserErrors();
  }

  render() {
    const sessionErrorsList = this.props.sessionErrors.map((error, idx) => {
      return (<li className="session-error" key={idx}>{error}</li>);
    });
      return (
          <content className="signin">
          <form className="navbar-form" onSubmit={this.handleSubmit}>
            <label>Username:
              <input className="input-field" onChange={this.handleChange('username')} type="text" value={this.state.username}></input>
            </label>
            <label>Password:
              <input className="input-field" onChange={this.handleChange('password')} type="password" value={this.state.password}></input>
            </label>
              <button className="signin-button">Log In!</button>
              <div className="signin-button-demo-container">
                <button className="signin-button" onClick={this.handleDemoSignin} >Demo Login!</button>
              </div>
          </form>
          <ul className="session-errors-list">
            {sessionErrorsList}
          </ul>
      </content>
      );
    }
  }

export default SignInForm;
