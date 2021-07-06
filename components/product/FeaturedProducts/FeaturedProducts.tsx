import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core';

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
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6)
  },
  featuredItemContainer: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(1)
  }
}));

export default FeaturedProducts;
