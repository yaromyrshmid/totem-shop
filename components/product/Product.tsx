import React from 'react';
import { Container } from '@material-ui/core';

import { Product } from 'domain/types';
import ProductBreadcrumbs from './ProductBreadCrumbs';

interface ProductProps {
  product: Product;
}

const ProductComponent: React.FC<ProductProps> = ({
  product: {
    category: { name: categoryName, slug: categorySlug },
    name
  }
}): JSX.Element => {
  return (
    <Container>
      <ProductBreadcrumbs
        categoryName={categoryName}
        categorySlug={categorySlug}
        productName={name}
      />
    </Container>
  );
};

export default ProductComponent;
