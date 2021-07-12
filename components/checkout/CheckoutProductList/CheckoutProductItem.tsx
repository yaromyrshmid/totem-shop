import React from 'react';
import Image from 'next/image';
import { Box, makeStyles, Typography } from '@material-ui/core';

import { CartProductWQuantity } from 'domain/types';
import CustomA from 'components/ui/links/CustomA';

interface CheckoutProductItemProps {
  product: CartProductWQuantity;
}

const CheckoutProductItem: React.FC<CheckoutProductItemProps> = ({
  product: {
    name,
    mainImage: { url: image },
    category: { slug: categorySlug },
    slug,
    price,
    quantity
  }
}): JSX.Element => {
  const classes = useStyles();

  return (
    <Box component="article" className={classes.container}>
      <Image width={120} height={120} src={image} />

      <Box className={classes.contentContainer}>
        <CustomA href={`/shop/${categorySlug}/${slug}`} target="_blank" rel="noreferrer">
          <Typography variant="body1" component="h3">
            {name}
          </Typography>
        </CustomA>

        <Box className={classes.countContainer}>
          <Typography variant="body2">
            Ціна: <span className={classes.emphasized}>{price.toFixed(0)} грн</span>
          </Typography>

          <Typography variant="body2">
            Кількість: <span className={classes.emphasized}>{quantity}</span>
          </Typography>

          <Typography variant="body1">
            Сума: <span className={classes.emphasized}>{(price * quantity).toFixed(0)} грн</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    gap: theme.spacing(1),
    marginBottom: theme.spacing(2),
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '75%'
    }
  },
  contentContainer: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(4),
      flexGrow: 1
    }
  },
  title: {
    [theme.breakpoints.up('md')]: {
      flexGrow: 1
    }
  },
  emphasized: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  countContainer: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    [theme.breakpoints.up('md')]: {
      flexGrow: 4
    }
  }
}));

export default CheckoutProductItem;
