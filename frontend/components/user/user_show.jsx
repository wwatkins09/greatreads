import React from 'react';
import BookshelfIndexContainer from '../bookshelf/bookshelf_index_container';

class UserShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  componentWillReceiveProps(props) {
    if (this.props.match.params.userId !== props.match.params.userId) {
      this.props.fetchUser(props.match.params.userId)
    }
  }

  render() {
    const errorsList = this.props.bookshelfErrors.map((error, idx) => {
      return (<li className="bookshelf-error" key={idx}>{error}</li>);
    });

    return (
      <div className="user-show">
        <h1>Welcome to your page, {this.props.user.username}!</h1>
        <content>
          <BookshelfIndexContainer user={this.props.user} />
          <ul className="bookshelf-errors-list">{errorsList}</ul>
        </content>
      </div>
    );
  }

}

export default UserShow;
