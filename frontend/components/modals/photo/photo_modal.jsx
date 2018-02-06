import React from 'react';

class PhotoModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {imageUrl: "/assets/empty_photo-801bb334399f245ab3eae460c5dfdcb2ea190921403c6f1ee6fb2b60d6cc6764.png", imageFile: null}

    this.handlePhotoUpload = this.handlePhotoUpload.bind(this);
    this.handlePhotoSubmission = this.handlePhotoSubmission.bind(this);
  }

  componentWillReceiveProps(props) {
    if (!props.toggled) {
      this.setState({imageUrl: "/assets/empty_photo-801bb334399f245ab3eae460c5dfdcb2ea190921403c6f1ee6fb2b60d6cc6764.png", imageFile: null});
    }
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
    if (file && file !== "/assets/empty_photo-801bb334399f245ab3eae460c5dfdcb2ea190921403c6f1ee6fb2b60d6cc6764.png") {
      formData.append("user[photo]", file);
      this.props.updateUserPhoto(formData).then(() => this.props.togglePhotoModal());
      this.setState({imageUrl: "/assets/empty_photo-801bb334399f245ab3eae460c5dfdcb2ea190921403c6f1ee6fb2b60d6cc6764.png", imageFile: null});
    }
  }

  render() {

    const buttonClassName = this.state.imageUrl === "/assets/empty_photo-801bb334399f245ab3eae460c5dfdcb2ea190921403c6f1ee6fb2b60d6cc6764.png" ? "photo-form-submit-disabled" : "photo-form-submit";
    const className = this.props.toggled ? "photo-modal-not-hidden" : "photo-modal-hidden";
    const errorsList = this.props.errors.map((error, idx) => {
      return (<li className="photo-error" key={idx}>{error}</li>);
    });

    return (
      <div className={className}>
        <h3>Edit Profile Photo</h3>
        <img className = "user-show-photo" src={this.state.imageUrl}></img>
          <form className="user-photo-form" onSubmit={this.handlePhotoSubmission}>
            <input size="25" id="user-photo-input" type="file" onChange={this.handlePhotoUpload}></input>
            <label htmlFor="user-photo-input">
              <p className="photo-upload-message">Choose a photo</p>
              <span className="photo-upload-arrow-container">
                <content className="photo-upload-arrow"></content>
              </span>
              </label>
            <button className={buttonClassName}>Upload photo</button>
          </form>
          <ul className="photo-errors-list">
            {errorsList}
          </ul>
      </div>
    )
  }
}

export default PhotoModal;
