import React, { useEffect } from 'react';

import { clientInitCart } from 'utils/apollo/cartVar';

interface CartProvider {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProvider> = ({ children }): JSX.Element => {
  useEffect(() => {
    clientInitCart();
  }, []);

  return <>{children}</>;
};

export default CartProvider;
