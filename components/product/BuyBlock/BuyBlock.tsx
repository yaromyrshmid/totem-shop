import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import AvailabilityMarker from './AvailabilityMarker';

interface BuyBlockProps {
  available: boolean;
  price: number;
  onBuy: () => void;
}

const BuyBlock: React.FC<BuyBlockProps> = ({ available, price, onBuy }): JSX.Element => {
  const classes = useStyles();

  return (
    <Box>
      <AvailabilityMarker available={available} />
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default BuyBlock;
