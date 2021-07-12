import React from 'react';
import { Box } from '@material-ui/core';

import { CartProductWQuantity } from 'domain/types';
import CheckoutProductItem from './CheckoutProductItem';

interface CheckoutProductListProps {
  products: CartProductWQuantity[];
}

const CheckoutProductList: React.FC<CheckoutProductListProps> = ({ products }): JSX.Element => {
  return (
    <Box component="section">
      {products.map((product) => (
        <CheckoutProductItem key={product.sys.id} product={product} />
      ))}
    </Box>
  );
};

export default CheckoutProductList;
