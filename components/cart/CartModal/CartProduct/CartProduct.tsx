import React from 'react';
import Image from 'next/image';
import { Box, makeStyles, Typography, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import { CartProductWQuantity } from 'domain/types';
import CustomA from 'components/ui/links/CustomA';
import QuantityControls from './QuantityControls';
import { scrollBarStyles } from 'theme/scrollBar';
import Price from './Price';

interface CartProductProps {
  product: CartProductWQuantity;
  onDecrease: () => void;
  onIncrease: () => void;
  onRemove: () => void;
}

const CartProductComponent: React.FC<CartProductProps> = ({
  product: {
    name,
    mainImage: { url: image },
    category: { slug: categorySlug },
    slug,
    price,
    quantity
  },
  onDecrease,
  onIncrease,
  onRemove
}): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Image width={150} height={150} src={image} className={classes.image} />

      <Box className={classes.content}>
        <CustomA href={`/shop/${categorySlug}/${slug}`}>
          <Typography variant="body1" component="h3" className={classes.title}>
            {name}
          </Typography>
        </CustomA>

        <QuantityControls quantity={quantity} onDecrease={onDecrease} onIncrease={onIncrease} />

        <Box className={classes.priceBlock}>
          <Price quantity={quantity} price={price} className={classes.priceContainer} />

          <Button onClick={onRemove} variant="text" className={classes.deleteButton}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100vw',
    maxWidth: '100%',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  image: {
    width: `calc(50% - ${theme.spacing(0.5)}px)`
  },
  content: {
    width: `calc(50% - ${theme.spacing(0.5)}px)`,
    overflowX: 'auto',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    ...scrollBarStyles.horizontal
  },
  title: {
    marginBottom: theme.spacing(1)
  },
  priceBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.75)
  },
  priceContainer: {
    flexGrow: 1
  },
  deleteButton: {
    minWidth: 'unset',
    padding: 0,
    color: theme.palette.grey[500]
  }
}));

export default CartProductComponent;
