import React from 'react';

const Modal = ({ message, onClose, type }) => {
  return (
    <div className="modal-overlay">
      <div className={`modal-content ${type === 'success' ? 'modal-success' : 'modal-error'}`}>
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default Modal;
