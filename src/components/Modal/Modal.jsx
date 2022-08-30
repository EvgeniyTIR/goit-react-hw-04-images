import { SCoverlay, SCmodal } from './Modal.styled';
import PropTypes from 'prop-types';
import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('click', this.handleBackdropClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('click', this.handleBackdropClick);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <SCoverlay onClick={this.handleBackdropClick}>
        <SCmodal>
          <img src={this.props.src} alt="" />
        </SCmodal>
      </SCoverlay>
    );
  }
}

export default Modal;

Modal.propType = {
  src: PropTypes.string.isRequired,
};
