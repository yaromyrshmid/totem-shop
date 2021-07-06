import React from 'react';
import { Container, Grid, Box, makeStyles, Typography } from '@material-ui/core';

import { Product } from 'domain/types';
import ProductBreadcrumbs from './ProductBreadcrumbs';
import { useProductColor } from 'utils/hooks/useProductColor';
import ProductTitle from './ProductTitle';
import ProductGallery from './ProductGallery';
import ColorPanel from 'components/product/ColorPanel';
import BuyBlock from './BuyBlock/BuyBlock';
import ProductDescription from './ProductDescription';
import FeaturedProducts from 'components/product/FeaturedProducts/FeaturedProducts';

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
    imagesCollection: { items: images },
    available,
    price,
    description,
    youMayAlsoLikeCollection: { items: otherProducts }
  }
}): JSX.Element => {
  const classes = useStyles();
  const { activeColor } = useProductColor(productColors);

  const handleBuy = () => {};

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

        <Grid item xs={12}>
          <BuyBlock
            available={available && activeColor ? activeColor.available : available}
            price={price}
            onBuy={handleBuy}
          />
        </Grid>

        <Grid item xs={12}>
          <ProductDescription description={description} />
        </Grid>

        {!!otherProducts.length && (
          <Grid item xs={12}>
            <Typography variant="h5" component="h3">
              Також вас може зацікавити:
            </Typography>

            <FeaturedProducts products={otherProducts} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  colorsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(1)
  }
}));

export default ProductComponent;
