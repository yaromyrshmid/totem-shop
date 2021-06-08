import React from 'react';
import { Box, Container, makeStyles, Typography, useTheme } from '@material-ui/core';

import { ProductPreview } from 'domain/types';
import Carousel from 'components/ui/Carousel';
import FeaturedProductItem from './FeaturedProductItem';

interface FeaturedProductsProps {
  products: Array<ProductPreview>;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }): JSX.Element => {
  const classes = useStyles();
  const {
    breakpoints: { values: breakpoints }
  } = useTheme();

  return (
    <Container>
      <Box mb={4}>
        <Typography variant="h4" component="h2">
          Новинки:
        </Typography>
      </Box>

      <Carousel
        settings={{
          slidesToScroll: 1,
          slidesToShow: 1,
          arrows: false,
          infinite: false,
          responsive: [
            {
              breakpoint: breakpoints.sm,
              settings: {
                slidesToShow: 1
              }
            },
            {
              breakpoint: breakpoints.lg,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 10000,
              settings: {
                slidesToShow: 3
              }
            }
          ]
        }}
      >
        {products.map((product) => (
          <FeaturedProductItem
            product={product}
            key={product.sys.id}
            containerClassName={classes.featuredItemContainer}
          />
        ))}
      </Carousel>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6)
  },
  featuredItemContainer: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(6)
  }
}));

export default FeaturedProducts;
