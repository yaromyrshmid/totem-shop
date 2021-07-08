import React from 'react';
import Image from 'next/image';
import { Box, makeStyles, Typography } from '@material-ui/core';

import { CartProduct } from 'domain/types';
import CustomA from 'components/ui/links/CustomA';
import QuantityControls from './QuantityControls';
import { scrollBarStyles } from 'theme/scrollBar';

interface CartProductProps {
  product: CartProduct;
  quantity?: number;
  onQuantityChange: (id: string, quantity: number) => void;
}

const CartProductComponent: React.FC<CartProductProps> = ({
  product: {
    name,
    mainImage: { url: image },
    category: { slug: categorySlug },
    slug,
    sys: { id }
  },
  quantity = 0,
  onQuantityChange
}): JSX.Element => {
  const classes = useStyles();

  const handleDecrease = () => {
    if (quantity) onQuantityChange(id, quantity - 1);
  };
  const handleIncrease = () => onQuantityChange(id, quantity + 1);

  return (
    <Box className={classes.container}>
      <Image width={150} height={150} src={image} className={classes.image} />

      <Box className={classes.content}>
        <CustomA href={`/shop/${categorySlug}/${slug}`}>
          <Typography variant="body1" component="h3" className={classes.title}>
            {name}
          </Typography>
        </CustomA>

        <QuantityControls
          quantity={quantity}
          onDecrease={handleDecrease}
          onIncrease={handleIncrease}
        />
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
    ...scrollBarStyles.horizontal
  },
  title: {
    marginBottom: theme.spacing(1)
  }
}));

export default CartProductComponent;
