import React from 'react';
import { Typography, Box } from '@material-ui/core';

const FeaturedProductsTitle: React.FC = (): JSX.Element => {
  return (
    <Box mb={4}>
      <Typography variant="h4" component="h2">
        Новинки:
      </Typography>
    </Box>
  );
};

export default FeaturedProductsTitle;
