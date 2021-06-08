import React, { useState } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import classnames from 'classnames';

import { ProductPreview } from 'domain/types';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useLinkSwipe } from 'utils/hooks/useLinkSwipe';

interface ProductItemProps {
  product: ProductPreview;
  containerClassName: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product: {
    slug,
    mainImage: { url },
    name,
    price
  },
  containerClassName
}: ProductItemProps): JSX.Element => {
  const classes = useStyles();
  const router = useRouter();

  const handleNavigateToProduct = () => {
    router.push(`/shop/${slug}`);
  };

  const { handleMouseDown, handleClick } = useLinkSwipe(handleNavigateToProduct);

  return (
    <Link href={`/shop/${slug}`}>
      <Box
        className={classnames(classes.cardContainer, containerClassName)}
        onMouseDown={handleMouseDown}
        onClick={handleClick}
      >
        <Box className={classes.paper} component="article">
          <Box className={classes.imageContainer}>
            <Image src={url} layout="fill" objectFit="cover" />
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
      </Box>
    </Link>
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
    position: 'relative',
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

export default ProductItem;
