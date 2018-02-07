import React from 'react';

class PhotoModal extends React.Component {

  constructor(props) {
    super(props);
    this.defaultUrl = '/assets/empty_photo-888af1902142430824fe90eb4da8c097ee30f3df367fdf16610b56b2b0ee09bf.png'
    this.state = {imageUrl: this.defaultUrl, imageFile: null}

    this.handlePhotoUpload = this.handlePhotoUpload.bind(this);
    this.handlePhotoSubmission = this.handlePhotoSubmission.bind(this);
  }

  componentWillReceiveProps(props) {
    if (!props.toggled) {
      this.setState({imageUrl: this.defaultUrl, imageFile: null});
    }
  }

  handlePhotoUpload(event) {
    this.props.clearPhotoErrors();
    const reader = new FileReader();
    const file = event.currentTarget.files[0];
    reader.onloadend = () =>
    this.setState({imageUrl: reader.result, imageFile: file});

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({imageUrl: this.defaultUrl, imageFile: null});
    }
  }

  handlePhotoSubmission(event) {
    event.preventDefault();
    const file = this.state.imageFile;

    const formData = new FormData();
    formData.append("user[id]", this.props.user.id);
    if (file && file !== this.defaultUrl) {
      formData.append("user[photo]", file);
      this.props.updateUserPhoto(formData).then(() => this.props.togglePhotoModal());
      this.setState({imageUrl: this.defaultUrl, imageFile: null});
    }
  }

  render() {

    let buttonClassName;
    let photoEl;
    if (this.state.imageUrl === this.defaultUrl) {
      buttonClassName = 'photo-form-submit-disabled';
      photoEl = (<div className="user-show-photo-container-preview">
        <img className="user-show-photo-default-preview" src={this.defaultUrl}></img>
      </div>)
    } else {
      buttonClassName = 'photo-form-submit';
      photoEl = (<img className="user-show-photo-preview" src={this.state.imageUrl}></img>);
    }

    const className = this.props.toggled ? "photo-modal-not-hidden" : "photo-modal-hidden";
    const errorsList = this.props.errors.map((error, idx) => {
      return (<li className="photo-error" key={idx}>{error}</li>);
    });

    return (
      <div className={className}>
        <h3>Edit Profile Photo</h3>
        {photoEl}
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
