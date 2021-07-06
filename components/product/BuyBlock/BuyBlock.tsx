import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import AvailabilityMarker from './AvailabilityMarker';
import Price from './Price';
import BuyButton from './BuyButton';

interface BuyBlockProps {
  available: boolean;
  price: number;
  onBuy: () => void;
}

const BuyBlock: React.FC<BuyBlockProps> = ({ available, price, onBuy }): JSX.Element => {
  const classes = useStyles();

  return (
    <Box mb={2}>
      <Box className={classes.availabilityPriceContainer} mb={1}>
        <AvailabilityMarker available={available} />

        <Price price={price} />
      </Box>

      <BuyButton onClick={onBuy} disabled={!available} />
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  availabilityPriceContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(0.5)
  }
}));

export default BuyBlock;
