import React from 'react';
import { Typography } from '@material-ui/core';

interface PriceProps {
  price: number;
}

const Price: React.FC<PriceProps> = ({ price }): JSX.Element => (
  <Typography variant="h5" component="p" color="primary">
    {price} грн
  </Typography>
);

export default Price;
