import React from 'react';
import { Grid } from '@material-ui/core';

import { ProductPreviewWithColorCollection } from 'domain/types';
import ProductCard from '../ProductCard/ProductCard';

interface GridItemProps {
  children: React.ReactNode;
}

const GridItem: React.FC<GridItemProps> = ({ children }): JSX.Element => (
  <Grid item xs={12} sm={6} md={4} lg={3} component="article">
    {children}
  </Grid>
);

interface ProductTileItemProps {
  product: ProductPreviewWithColorCollection;
}

const ProductTileItem: React.FC<ProductTileItemProps> = ({ product }): JSX.Element => {
  if (product.colorsCollection.items.length) {
    return (
      <>
        {product.colorsCollection.items.map((coloredProduct) => (
          <GridItem key={coloredProduct.sys.id}>
            <ProductCard
              product={{
                ...product,
                slug: `${product.slug}?${coloredProduct.slug}`,
                mainImage: coloredProduct.mainImage,
                name: `${product.name} - ${coloredProduct.color}`
              }}
            />
          </GridItem>
        ))}
      </>
    );
  }

  return (
    <GridItem>
      <ProductCard product={product} />
    </GridItem>
  );
};

export default ProductTileItem;
