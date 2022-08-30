import { SCGallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGallertItem';

const ImageGallery = ({ galleryList, onClick, imageURL }) => (
  <>
    <SCGallery>
      <ImageGalleryItem
        galleryList={galleryList}
        onClick={onClick}
        imageURL={imageURL}
      />
    </SCGallery>
  </>
);

export default ImageGallery;
