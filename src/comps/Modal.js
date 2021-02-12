import React from "react";

const Modal = (props) => {
  const ModalWrapper = () => {
    return (
      <div className="modal-wrapper">
        <div className="image-warpper">
          <div className="close" onClick={() => props.closeModal(null)}></div>
          <img src={props.imageUrl} alt="image" />
        </div>
      </div>
    );
  };

  return props.imageUrl === null ? "" : <ModalWrapper />;
};

export default Modal;
