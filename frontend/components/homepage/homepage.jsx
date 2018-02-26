import React from 'react';

class Homepage extends React.Component {

  constructor(props) {
    super(props);

    this.handleDemoSignin = this.handleDemoSignin.bind(this);
  }

  handleDemoSignin() {
    this.props.signIn({username: "Demo User", password: "starwars"});
  }

  render() {
    return (
      <div className="homepage">
        <content className="homepage-welcome">
          <h1>Looking for a great read?</h1>
          <h2>We're here to help.</h2>
          <span className="homepage-demo" onClick={this.handleDemoSignin}>
            <p>Demo</p>
          </span>
        </content>
        <content className="homepage-discover-container">
          <div className="homepage-discover">
            <div className="homepage-discover-example-container">
              <h4>What will <em>you</em> discover?</h4>
            <span className="homepage-discover-example">
              <content className="homepage-example-before">
                <p>Because Flora liked...</p>
                <span className="homepage-book-list">
                  <img src="https://s3.amazonaws.com/aa-greatreads-dev/anna_karenina.jpg" />
                  <img src="https://s3.amazonaws.com/aa-greatreads-dev/crime_and_punishment.jpg" />
                  <img src="https://s3.amazonaws.com/aa-greatreads-dev/eugene_onegin.jpg" />
                </span>
              </content>
              <content className="homepage-example-arrow">
                <p>=></p>
              </content>
              <content className="homepage-example-after">
                <p>Now she's reading:</p>
                <img src="https://s3.amazonaws.com/aa-greatreads-dev/pale_fire.jpg" />
              </content>
            </span>
            <span className="homepage-discover-example">
              <content className="homepage-example-before">
                <p>Because Nathan liked...</p>
                <span className="homepage-book-list">
                  <img src="https://s3.amazonaws.com/aa-greatreads-dev/if_on_a_winters_night_a_traveler.jpg" />
                  <img src="https://s3.amazonaws.com/aa-greatreads-dev/catch_22.jpg" />
                  <img src="https://s3.amazonaws.com/aa-greatreads-dev/the_wasteland.jpg" />
                </span>
              </content>
              <content className="homepage-example-arrow">
                <p>=></p>
              </content>
              <content className="homepage-example-after">
                <p>Now he's reading:</p>
                <img src="https://s3.amazonaws.com/aa-greatreads-dev/the_wind_up_bird_chronicle.jpg" />
              </content>
            </span>
            </div>
          <span className="homepage-registration">
            <h4>Find out today!</h4>
            <span id="homepage-registration-button1" className="homepage-registration-button" onClick={() => this.props.history.push('/signup')}>Create an account</span>
            <span className="homepage-or">
              <div id="line-left" className="homepage-line"></div>
              <p>or</p>
              <div id="line-right" className="homepage-line"></div>
            </span>
            <span id="homepage-registration-button2" className="homepage-registration-button" onClick={this.handleDemoSignin}>Demo Login</span>
          </span>
        </div>
        </content>
      </div>
    );
  }

}

export default Homepage;
