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
        <main className="user-show-left">
          <h1>{finalTitle}</h1>
          <content>
            <BookshelfIndexContainer user={this.props.user} />
            <ul className="bookshelf-errors-list">{errorsList}</ul>
          </content>
        </main>
        <span className="user-show-right">
          <h3>2018 Reading Challenge</h3>
          <p>Books read so far: {bookNum}.</p>
          <p>Book goal: 50 books.</p>
          <p>You're {bookNum * 2}% there!</p>
        </span>
      </div>
    );
  }

}

export default UserShow;
