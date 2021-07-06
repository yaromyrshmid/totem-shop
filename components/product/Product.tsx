import React from 'react';
import { Container, Grid, Box, makeStyles } from '@material-ui/core';

import { Product } from 'domain/types';
import ProductBreadcrumbs from './ProductBreadcrumbs';
import { useProductColor } from 'utils/hooks/useProductColor';
import ProductTitle from './ProductTitle';
import ProductGallery from './ProductGallery';
import ColorPanel from 'components/product/ColorPanel';

interface ProductProps {
  product: Product;
}

const ProductComponent: React.FC<ProductProps> = ({
  product: {
    category: { name: categoryName, slug: categorySlug },
    name,
    slug,
    colorsCollection: { items: productColors },
    mainImage,
    imagesCollection: { items: images }
  }
}): JSX.Element => {
  const { activeColor } = useProductColor(productColors);
  const classes = useStyles();

  return (
    <Container>
      <ProductBreadcrumbs
        categoryName={categoryName}
        categorySlug={categorySlug}
        productName={name}
      />

      <ProductTitle name={name} colorName={activeColor?.color} />

      <Grid container>
        <Grid item xs={12}>
          <ProductGallery
            images={
              activeColor
                ? [activeColor.mainImage, ...activeColor.imagesCollection.items]
                : [mainImage, ...images]
            }
          />
        </Grid>

        <Grid item xs={12}>
          <Box className={classes.colorsContainer}>
            <ColorPanel
              colors={productColors}
              productSlug={slug}
              colorSlug={activeColor?.slug}
              pathPrefix={`/shop/${categorySlug}/`}
              useShallowRouting
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  colorsContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default ProductComponent;
