import React from 'react';
import BookshelfIndexContainer from '../bookshelf/bookshelf_index_container';

class UserShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.userId)
  }

  render() {
    return (
      <div>
        <h1>Welcome to your page, {this.props.user.username}!</h1>
        <content>
          <BookshelfIndexContainer />
        </content>
      </div>
    );
  }

}

export default UserShow;
