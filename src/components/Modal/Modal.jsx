import { SCoverlay, SCmodal } from './Modal.styled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

function Modal({ onClose, src }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleBackdropClick);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleBackdropClick);
    };
  });
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <SCoverlay onClick={handleBackdropClick}>
      <SCmodal>
        <img src={src} alt="" />
      </SCmodal>
    </SCoverlay>
  );
}

export default Modal;

Modal.propType = {
  src: PropTypes.string.isRequired,
};
