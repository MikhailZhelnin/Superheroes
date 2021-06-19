import React from 'react';

import './Modal.css';

const Modal = ({ modalImage, setModalImage }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('modal')) {
      setModalImage(null);
    }
  };

  return (
    <div className="modal" onClick={handleClick}>
      <div className="modal__img">
        <img src={modalImage} alt="big pic" />
      </div>
    </div>
  );
};

export default Modal;
