import React from 'react';
import {Link} from 'react-router-dom';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleChange(field) {
    return (event) => {
      this.setState({[field]: event.target.value});
    };
  }

  handleSignup(event) {
    event.preventDefault();
    this.props.createUser(this.state);
    this.setState({username: "", password: ""})
  }

  componentWillUnmount() {
    this.props.clearSessionAndUserErrors();
  }

  render() {
    const errorsList = this.props.userErrors.map((error, idx) => {
      return (<li className="registration-error" key={idx}>{error}</li>);
    });
    return (
      <main className="registration">
        <content className="registration-content">
          <h2>Sign up</h2>
          <div className="registration-form">
              <input className="input-field" onChange={this.handleChange('username')} type="text" value={this.state.username} placeholder="Username"></input>
              <input className="input-field" onChange={this.handleChange('password')} type="password" value={this.state.password} placeholder="Password"></input>
              <span className="registration-button" onClick={this.handleSignup}>Sign up</span>
              <ul className="user-errors-list">
                {errorsList}
              </ul>
              <p>Already have an account?</p>
              <Link to="/signin">Sign in</Link>
            </div>
        </content>
    </main>
    );
  }

}

export default SignUp;



// <div className="signup">
//   <content className="signup-content">
//     <p>Don't have an account?</p>
//     <p>Sign up now for free!</p>
//     <form  className="signup-form" onSubmit={this.handleSignup}>
//       <input onChange={this.handleChange('username')} type="text" value={this.state.username} placeholder="Username"></input>
//       <input onChange={this.handleChange('password')} type="password" value={this.state.password} placeholder="Password"></input>
//       <button className="signup-button">Sign Up</button>
//
//     </form>
//     <ul className="user-errors-list">{errorsList}</ul>
//   </content>
// </div>
