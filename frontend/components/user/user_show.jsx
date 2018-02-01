import React from 'react';
import BookshelfIndexContainer from '../bookshelf/bookshelf_index_container';

class UserShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearModals();
    this.props.fetchUser(this.props.userId).then(() => {
      this.props.fetchBookshelf(this.props.user.bookshelfIds[0])
    }, () => {
      this.props.history.push("/");
    });
  }

  componentWillReceiveProps(props) {
    if (this.props.match.params.userId !== props.match.params.userId) {
      this.props.fetchUser(props.match.params.userId).then(() => {}, () => {
        this.props.history.push("/");
      });
    }
  }

  render() {
    const errorsList = this.props.bookshelfErrors.map((error, idx) => {
      return (<li className="bookshelf-error" key={idx}>{error}</li>);
    });
    let finalTitle;
    if (this.props.userId === this.props.currentUserId) {
      finalTitle = this.props.title + this.props.user.username + '!';
    } else {
      finalTitle = this.props.user.username + this.props.title
    }
    const bookNum = this.props.readBookshelf.bookIds.length;

    return (
      <div className="user-show">
          <h1>{finalTitle}</h1>
            <BookshelfIndexContainer user={this.props.user} />
            <ul className="bookshelf-errors-list">{errorsList}</ul>
          <h3 className="reading-challenge-title">2018 READING CHALLENGE</h3>
          <content className="reading-challenge-content">
            <div className="reading-challenge-left">
              <span className="reading-challenge-year">2018</span>
              <span className="reading-challenge-image"></span>
              <span className="reading-challenge-message-1">READING</span>
              <span className="reading-challenge-message-2">CHALLENGE</span>
            </div>
            <div className="reading-challenge-right">
              <p>Challenge yourself to read 50 books this year!</p>
              <p>Books read so far: {bookNum}.</p>
              <p>You're {bookNum * 2}% there!</p>
            </div>
          </content>
      </div>
    );
  }

}

export default UserShow;
