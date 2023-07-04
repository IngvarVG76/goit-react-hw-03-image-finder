import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImgGallery } from 'components/ImageGallery/ImageGallery.styled';

class ImageGallery extends React.Component {
  render() {
    const { images, onImageClick } = this.props;

    return (
      <ImgGallery>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClick={onImageClick}
          />
        ))}
      </ImgGallery>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
