import React from 'react';

class FullScreenModal extends React.Component {

  constructor(props) {
    super(props);

    this.handleClear = this.handleClear.bind(this);
  }

  handleClear(event) {
    event.stopPropagation();
    this.props.clearModals();
  }

  render() {

    let className = "full-screen-modal";
    if (this.props.toggled) {
      className = "full-screen-modal-toggled";
    }

    return (
      <div className={className} onClick={this.handleClear}></div>
    );
  }

}


export default FullScreenModal;
