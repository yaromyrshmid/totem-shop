import React, { useMemo } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import BackgroundImage from 'gatsby-background-image';
import classnames from 'classnames';

import CustomLink from '../../ui/CustomLink';
import NativeLink from '../../ui/NativeLink';
import { ProductPreview as ProductPreviewType } from '../../../types/Product';

interface ProductPreviewProps {
  product: ProductPreviewType;
  useNativeLinking: boolean;
  containerClassName: string;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({
  product: {
    slug,
    mainImage: { fluid: mainImage },
    name,
    price
  },
  useNativeLinking,
  containerClassName
}: ProductPreviewProps): JSX.Element => {
  const classes = useStyles();

  const LinkComponent = useMemo(() => (useNativeLinking ? NativeLink : CustomLink), [
    slug,
    useNativeLinking
  ]);

  return (
    <Box className={classnames(classes.cardContainer, containerClassName)}>
      <LinkComponent to={`/shop/${slug}`}>
        <Box className={classes.paper} component="article">
          <Box className={classes.imageContainer}>
            <BackgroundImage
              Tag="div"
              fluid={mainImage}
              className={classnames(classes.image, 'product-item-image')}
            />
          </Box>

          <Box className={classes.content}>
            <Typography variant="h6" component="h3" className={classes.title}>
              {name}
            </Typography>

            <Typography variant="h6" component="p" color="secondary" className={classes.priceText}>
              {price} грн.
            </Typography>
          </Box>
        </Box>
      </LinkComponent>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: '100%'
  },
  paper: {
    width: '100%',
    overflow: 'hidden',
    height: 540,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:hover': {
      borderRightColor: theme.palette.primary.main
    },
    ['& .product-item-image']: {
      transition: 'transform 600ms'
    },
    '&:hover .product-item-image': {
      transform: 'scale(1.1)'
    },

    [theme.breakpoints.up('sm')]: {
      height: 320
    }
  },
  imageContainer: {
    width: '70vw',
    height: '70vw',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      height: '100%',
      width: '50%'
    }
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover'
  },
  content: {
    height: '30%',
    width: '100%',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      height: '100%',
      width: '50%'
    }
  },
  title: {
    color: theme.palette.common.black
  },
  priceText: {
    textAlign: 'right'
  }
}));

export default ProductPreview;
