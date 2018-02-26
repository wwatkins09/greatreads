import React from 'react';
import BookshelfIndexContainer from '../bookshelf/bookshelf_index_container';
import {Link} from 'react-router-dom';
import PhotoModalContainer from '../modals/photo/photo_modal_container';

class UserShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {imageUrl: "", imageFile: null};

    this.handlePhoto = this.handlePhoto.bind(this);

  }

  componentDidMount() {
    this.props.clearModals();
    this.props.fetchUser(this.props.userId).then(() => {
      this.props.fetchUserBookshelves(this.props.user.id)
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

  handlePhoto(event) {
    event.preventDefault();
    this.props.clearPhotoErrors();
    this.props.togglePhotoModal();
  }

  render() {

    const errorsList = this.props.bookshelfErrors.map((error, idx) => {
      return (<li className="bookshelf-error" key={idx}>{error}</li>);
    });

    let editPhotoButton
    if (parseInt(this.props.userId) === this.props.currentUserId) {
      editPhotoButton = (<button onClick={this.handlePhoto} className="photo-modal-toggle-button">Edit profile photo</button>)
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

    const photoEl = (this.props.user.photoUrl === '/assets/empty_photo-888af1902142430824fe90eb4da8c097ee30f3df367fdf16610b56b2b0ee09bf.png')
    ? (<div className="user-show-photo-container">
      <img className="user-show-photo-default" src={this.props.user.photoUrl}></img>
    </div>)
    : (<img className="user-show-photo" src={this.props.user.photoUrl}></img>);

    return (
      <div className="user-show">
        <PhotoModalContainer user={this.props.user} />
        <content className="user-profile-info">
          <h2 className="user-show-name">{this.props.user.username}</h2>
          {photoEl}
          {editPhotoButton}
          <BookshelfIndexContainer user={this.props.user} />
          <ul className="bookshelf-errors-list">{errorsList}</ul>
        </content>
        <content className="user-currently-reading">
            <h3>CURRENTLY READING</h3>
            {currentCover}
            <span className="user-show-current-info">
              {currentTitle}
              <p className="user-show-current-author">{currentAuthor}</p>
            </span>
        </content>
          <content className="reading-challenge-content">
            <h3 className="reading-challenge-title">2018 READING CHALLENGE</h3>
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

      </div>
    );
  }

}

export default UserShow;
