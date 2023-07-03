import React from 'react';
import PropTypes from 'prop-types';

import {
  ImgGalleryItem,
  ImgGalleryPic,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <ImgGalleryItem className="gallery-item">
      <ImgGalleryPic
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => onClick(image.largeImageURL)}
      />
    </ImgGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
