import React from 'react';
import BookshelfIndexContainer from '../bookshelf/bookshelf_index_container';

class UserShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId).then(() => {}, () => {
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

    return (
      <div className="user-show">
        <h1>{finalTitle}</h1></content>
        <content>
          <BookshelfIndexContainer user={this.props.user} />
          <ul className="bookshelf-errors-list">{errorsList}</ul>
        </content>
      </div>
    );
  }

}

export default UserShow;
