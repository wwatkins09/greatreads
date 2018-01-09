import React from 'react';

const FullScreenModal = function({toggled}) {

  let className = "full-screen-modal";
  if (toggled) {
    className = "full-screen-modal-toggled";
  }

  return (
    <div className={className}>WORKINGWORKINGWORKING@@@</div>
  );
};

export default FullScreenModal;
