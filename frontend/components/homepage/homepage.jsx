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
          <span className="homepage-demo">
            <p>Demo</p>
          </span>
        </content>
        <article className="homepage-discover">
          <h4>What will <em>you</em> discover?</h4>
          <span className="homepage-discover-example">
            <content className="homepage-example-before">
              <p>Because Flora liked...</p>
              <span className="homepage-book-list">books here</span>
            </content>
          </span>
        </article>
        <span className="homepage-registration">
          <span id="homepage-registration-button" className="registration-button" onClick={() => this.props.history.push('/signup')}>Create an account</span>
          <span className="homepage-or">
            <div id="line-left" className="homepage-line"></div>
            <p>or</p>
            <div id="line-right" className="homepage-line"></div>
          </span>
          <span id="homepage-registration-button" className="registration-button" onClick={this.handleDemoSignin}>Demo Login</span>
        </span>
      </div>
    );
  }

}

export default Homepage;

// <content className="homepage-welcome">
//   <h1>Looking for a great read?</h1>
//   <h2>Look no further.</h2>
//   <article className="homepage-ideas">
//     <span>
//       <p>Looking for something new?</p>
//       <p>Browse our collection of books and see if something catches your eye. You can make your own bookshelves to sort books by genre, time period, country - whatever you want!</p>
//     </span>
//     <span>
//       <p>Can't remember all the books you've read?</p>
//       <p>Keep track of what books you've already read, as well as books you're reading now or want to read in the future.</p>
//     </span>
//     <span>
//       <p>Have an opinion?</p>
//       <p>Leave a review to show whether you couldn't put it down or couldn't stand it. If you're not sure whether it's worth a try, check out what other users have said.</p>
//     </span>
//   </article>
// </content>
// <content className="homepage-books">
//   <p>more stuff here!</p>
// </content>
