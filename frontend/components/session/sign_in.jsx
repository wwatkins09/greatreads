import React from 'react';
import {Link} from 'react-router-dom';

class SignIn extends React.Component {

  constructor(props) {
    super(props);

    this.state = {username: "", password: ""};
    this.handleSignin = this.handleSignin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDemoSignin = this.handleDemoSignin.bind(this);
  }

  handleChange(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    };
  }


  handleSignin(event) {
    event.preventDefault();

    this.props.signIn(this.state).then(() => {}, () => {
      this.setState( {username: "", password: ""} )
      });
  }

  handleDemoSignin(event) {
    event.preventDefault();

    this.props.signIn({username: "Demo User", password: "starwars"});
  }

  componentWillUnmount() {
    this.props.clearSessionAndUserErrors();
  }

  render() {
    const sessionErrorsList = this.props.sessionErrors.map((error, idx) => {
      return (<li className="registration-error" key={idx}>{error}</li>);
    });

    return (
      <main className="registration">
        <content className="registration-content">
          <h2>Sign in</h2>
          <div className="registration-form">
              <input className="input-field" onChange={this.handleChange('username')} type="text" value={this.state.username} placeholder="Username"></input>
              <input className="input-field" onChange={this.handleChange('password')} type="password" value={this.state.password} placeholder="Password"></input>
              <span className="registration-button" onClick={this.handleSignin}>Log In</span>
              <span className="signin-or">
                <div id="line-left" className="signin-line"></div>
                <p>or</p>
                <div id="line-right" className="signin-line"></div>
              </span>
              <span className="registration-button" onClick={this.handleDemoSignin}>Demo Login</span>
              <ul className="session-errors-list">
                {sessionErrorsList}
              </ul>
              <p className="registration-bottom-message">Don't have an account?</p>
              <Link to="/signup">Sign up</Link>
            </div>
        </content>
    </main>
    );
  }

}

export default SignIn
