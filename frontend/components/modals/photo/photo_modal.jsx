import React from 'react';

class PhotoModal extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="photo-modal">
        <img className = "user-show-photo" src={this.props.user.photoUrl}></img>
          <form className="user-photo-form" onSubmit={this.handlePhotoSubmission}>
            <input size="25" id="user-photo-input" type="file" onChange={this.handlePhotoUpload}></input>
            <label htmlFor="user-photo-input">
              <p className="photo-upload-message">Choose a photo</p>
              <span className="photo-upload-arrow-container">
                <content className="photo-upload-arrow"></content>
              </span>
              </label>
            <button className="photo-form-submit">Upload a photo</button>
          </form>
      </div>
    )
  }
}

export default PhotoModal;
