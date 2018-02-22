import React from 'react';

class SignIn extends React.Component {

  constructor(props) {
    super(props);

    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      <main className="signin">
        <content className="signin-content">
          <h2>Sign in</h2>
          <form className="signin-form" onSubmit={this.handleSubmit}>
              <input className="input-field" onChange={this.handleChange('username')} type="text" value={this.state.username} placeholder="Username"></input>
              <input className="input-field" onChange={this.handleChange('password')} type="password" value={this.state.password} placeholder="Password"></input>
              <button className="signin-button">Log In</button>
          </form>
          <ul className="session-errors-list">
            {sessionErrorsList}
          </ul>
        </content>
    </main>
    );
  }

}

export default SignIn
