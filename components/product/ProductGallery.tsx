import React from 'react';

import { Image } from 'domain/types';

interface ProductGalleryProps {
  images: Array<Image>;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }): JSX.Element => {
  return (
    <div>
      <p>{JSON.stringify(images)}</p>
    </div>
  );
};

export default ProductGallery;
