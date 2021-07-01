import React from 'react';
import { Container } from '@material-ui/core';

import { Product } from 'domain/types';
import ProductBreadcrumbs from './ProductBreadcrumbs';
import { useProductColor } from 'utils/hooks/useProductColor';
import ProductTitle from './ProductTitle';
import ProductGallery from './ProductGallery';

interface ProductProps {
  product: Product;
}

const ProductComponent: React.FC<ProductProps> = ({
  product: {
    category: { name: categoryName, slug: categorySlug },
    name,
    colorsCollection: { items: productColors },
    mainImage,
    imagesCollection: { items: images }
  }
}): JSX.Element => {
  const { activeColor } = useProductColor(productColors);

  return (
    <Container>
      <ProductBreadcrumbs
        categoryName={categoryName}
        categorySlug={categorySlug}
        productName={name}
      />

      <ProductTitle name={name} colorName={activeColor?.color} />

      <ProductGallery
        images={
          activeColor
            ? [activeColor.mainImage, ...activeColor.imagesCollection.items]
            : [mainImage, ...images]
        }
      />
    </Container>
  );
};

export default ProductComponent;
