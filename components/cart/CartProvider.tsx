import React, { useEffect } from 'react';

import { initCart } from 'utils/apollo/cartVar';

interface CartProvider {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProvider> = ({ children }): JSX.Element => {
  useEffect(() => {
    initCart();
  }, []);

  return <>{children}</>;
};

export default CartProvider;
