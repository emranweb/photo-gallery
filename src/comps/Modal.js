import React from "react";
import {motion} from 'framer-motion';

const Modal = (props) => {
  const ModalWrapper = () => {
    return (
      <div className="modal-wrapper">
        <motion.div className="image-warpper" initial={{opacity:0}} animate={{opacity:1}}>
          <div className="close cursor-pointer" onClick={() => props.closeModal(null)}>X</div>
          <img src={props.imageUrl} alt="img" />
        </motion.div>
      </div>
    );
  };

  return props.imageUrl === null ? "" : <ModalWrapper />;
};

export default Modal;
