import React from 'react';

class PhotoModal extends React.Component {

  constructor(props) {
    super(props);

    this.handlePhotoUpload = this.handlePhotoUpload.bind(this);
    this.handlePhotoSubmission = this.handlePhotoSubmission.bind(this);
  }

  handlePhotoUpload(event) {
    const reader = new FileReader();
    const file = event.currentTarget.files[0];
    reader.onloadend = () =>
    this.setState({imageUrl: reader.result, imageFile: file});

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({imageUrl: "", imageFile: null});
    }
  }

  handlePhotoSubmission(event) {
    event.preventDefault();
    const file = this.state.imageFile;

    const formData = new FormData();
    formData.append("user[id]", this.props.user.id);
    if (file) {
      formData.append("user[photo]", file);
    }
    this.props.updateUserPhoto(formData);
    this.setState({imageUrl: "", imageFile: null});
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
