import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ModalOverlay, ModalPic } from 'components/Modal/Modal.styled';

class Modal extends Component {
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { image } = this.props;

    return (
      <ModalOverlay onClick={this.handleOverlayClick}>
        <ModalPic src={image} alt="" />
      </ModalOverlay>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
