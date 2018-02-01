import React from 'react';
import BookshelfIndexContainer from '../bookshelf/bookshelf_index_container';
import {Link} from 'react-router-dom';

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
    }).then(() => {
      if (this.props.currentBookId) {
        this.props.fetchBook(this.props.currentBookId);
      }
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


    let currentTitle = <p></p>;
    let currentAuthor = '';
    let currentCover;
    if (this.props.currentBook) {
      currentTitle = <Link className="user-show-current-title" to={`/books/${this.props.currentBookId}`}>{this.props.currentBook.title}</Link>
      currentAuthor = `by ${this.props.currentBook.author}`;
      currentCover = (<Link className="user-show-current-cover" to={`/books/${this.props.currentBookId}`}>
          <img src={this.props.currentBook.coverUrl} className="user-show-current-cover" />
          </Link>
        );
    }

    return (
      <div className="user-show">
          <h1 className="user-show-title">{finalTitle}</h1>
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
              <p className="reading-challenge-challenge">Challenge yourself to read 50 books this year!</p>
              <p>Books read so far: {bookNum}</p>
              <p>You're {bookNum * 2}% there!</p>
              <progress value={`${bookNum * 2}`} max="100"></progress>
            </div>
          </content>
          <h3 className="user-show-current-header">CURRENTLY READING</h3>
          <content className="user-show-current">
            {currentCover}
            <span className="user-show-current-info">
              {currentTitle}
              <p className="user-show-current-author">{`by ${currentAuthor}`}</p>
            </span>
          </content>
      </div>
    );
  }

}

export default UserShow;
