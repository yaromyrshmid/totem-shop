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
import { addToCart } from 'utils/apollo/vars/cartVar';

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
    youMayAlsoLikeCollection: { items: otherProducts },
    sys: { id }
  }
}): JSX.Element => {
  const classes = useStyles();
  const { activeColor } = useProductColor(productColors);

  const handleBuy = () => {
    addToCart(activeColor?.sys.id || id);
  };

  return (
    <Container>
      <ProductBreadcrumbs
        categoryName={categoryName}
        categorySlug={categorySlug}
        productName={name}
      />

      <ProductTitle name={name} colorName={activeColor?.color} />

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <ProductGallery
            images={
              activeColor
                ? [activeColor.mainImage, ...activeColor.imagesCollection.items]
                : [mainImage, ...images]
            }
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box className={classes.infoContainer}>
            <Box className={classes.colorsContainer}>
              <ColorPanel
                colors={productColors}
                productSlug={slug}
                colorSlug={activeColor?.slug}
                pathPrefix={`/shop/${categorySlug}/`}
                useShallowRouting
              />
            </Box>

            <Box className={classes.buyContainer}>
              <BuyBlock
                available={available && activeColor ? activeColor.available : available}
                price={price}
                onBuy={handleBuy}
              />
            </Box>

            <Box className={classes.descriptionContainer}>
              <ProductDescription description={description} />
            </Box>
          </Box>
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
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateAreas: `"colorsContainer colorsContainer"
        "buyContainer descriptionContainer"`
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  colorsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gridArea: 'colorsContainer',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start'
    }
  },
  buyContainer: {
    gridArea: 'buyContainer',
    [theme.breakpoints.up('md')]: {
      width: '60%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '50%'
    }
  },
  descriptionContainer: {
    gridArea: 'descriptionContainer',
    [theme.breakpoints.up('lg')]: {
      width: '75%'
    }
  }
}));

export default ProductComponent;
