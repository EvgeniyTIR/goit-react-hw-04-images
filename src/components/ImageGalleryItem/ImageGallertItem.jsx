import { SCItem, SCImage } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { useState } from 'react';

function ImageGalleryItem({ onClick, galleryList, imageURL }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(isOpenModal => !isOpenModal);
  };

  return (
    <>
      {galleryList.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <SCItem
            key={id}
            onClick={() => {
              onClick(largeImageURL);
              toggleModal();
            }}
          >
            <SCImage src={webformatURL} />
          </SCItem>
        );
      })}
      {isOpenModal && <Modal src={imageURL} onClose={toggleModal} />}
    </>
  );
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
