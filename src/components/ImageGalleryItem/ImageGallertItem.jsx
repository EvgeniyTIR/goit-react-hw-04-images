import { SCItem, SCImage } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  isOpenModal = () => {
    this.setState(({ isOpenModal }) => ({
      isOpenModal: !isOpenModal,
    }));
  };

  render() {
    const { galleryList } = this.props;

    return (
      <>
        {galleryList.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <SCItem
              key={id}
              onClick={() => {
                this.props.onClick(largeImageURL);
                this.isOpenModal();
              }}
            >
              <SCImage src={webformatURL} />
            </SCItem>
          );
        })}
        {this.state.isOpenModal && (
          <Modal src={this.props.imageURL} onClose={this.isOpenModal} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propType = {
  galleryList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGalleryItem;
