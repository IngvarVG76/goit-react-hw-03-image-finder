import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImgGallery } from 'components/ImageGallery/ImageGallery.styled';
import Button from 'components/Button/Button';

const ImageGallery = ({ images, onImageClick, fetchMore, totalHits }) => {
  const areMoreImagesAvailable = images.length < totalHits;
  return (
    <div>
      <ImgGallery className="gallery">
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClick={onImageClick}
          />
        ))}
      </ImgGallery>
      {areMoreImagesAvailable && <Button onClick={fetchMore}>Load More</Button>}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
  fetchMore: PropTypes.func.isRequired,
  totalHits: PropTypes.number.isRequired,
};

export default ImageGallery;
