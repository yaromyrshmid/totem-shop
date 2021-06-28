import React from 'react';
import { Grid, Container } from '@material-ui/core';

import { ProductPreviewWithColorCollection } from 'domain/types';
import ProductTileItem from './ProductTileItem';

interface ProductTilesProps {
  products: Array<ProductPreviewWithColorCollection>;
}

const ProductTiles: React.FC<ProductTilesProps> = ({ products }): JSX.Element => {
  return (
    <Container>
      <Grid container spacing={2} alignItems="stretch">
        {products.map((product) => (
          <ProductTileItem product={product} key={product.sys.id} />
        ))}
      </Grid>
    </Container>
  );
};

export default ProductTiles;
