import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

interface PriceProps {
  quantity: number;
  price: number;
  className: string;
}

const Price: React.FC<PriceProps> = ({ price, quantity, className }): JSX.Element => {
  const classes = useStyles();

  if (quantity === 1) {
    return (
      <Box className={className}>
        <Typography variant="body2">
          <span className={classes.emphesized}>Ціна:</span> {price.toFixed(0)}грн
        </Typography>
      </Box>
    );
  }

  return (
    <Box className={className}>
      <Typography variant="caption">
        <span className={classes.emphesized}>За одиницю:</span> {price.toFixed(0)}грн
      </Typography>
      <Typography variant="body2">
        <span className={classes.emphesized}>Всього:</span> {(price * quantity).toFixed(0)}грн
      </Typography>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  emphesized: {
    color: theme.palette.primary.main,
    fontWeight: 600
  }
}));

export default Price;
