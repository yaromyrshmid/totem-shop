import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import classnames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { ProductPreview } from 'domain/types';
import { useLinkSwipe } from 'utils/hooks/useLinkSwipe';
import CustomA from 'components/ui/links/CustomA';

interface ProductItemProps {
  product: ProductPreview;
  containerClassName: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product: {
    slug,
    mainImage: { url },
    name,
    price,
    category: { slug: categorySlug }
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
    <Link href={`/shop/${categorySlug}/${slug}`} passHref>
      <CustomA>
        <Box
          className={classnames(classes.cardContainer, containerClassName)}
          onMouseDown={handleMouseDown}
          onClick={handleClick}
        >
          <Box className={classes.paper} component="article">
            <Image
              src={url}
              height={250}
              width={250}
              quality={100}
              className="product-item-image"
            />

            <Box className={classes.content}>
              <Typography variant="h6" component="h3" className={classes.title}>
                {name}
              </Typography>

              <Typography
                variant="h6"
                component="p"
                color="secondary"
                className={classes.priceText}
              >
                {price} грн
              </Typography>
            </Box>
          </Box>
        </Box>
      </CustomA>
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    ['& .product-item-image']: {
      transition: 'transform 600ms'
    },
    '&:hover .product-item-image': {
      transform: 'scale(1.1)'
    }
  },
  content: {
    height: '30%',
    width: '100%',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      height: '100%',
      width: '75%'
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
