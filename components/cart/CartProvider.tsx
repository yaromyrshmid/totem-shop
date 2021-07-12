import React, { useEffect } from 'react';
import { useReactiveVar } from '@apollo/client';

import { initCart } from 'utils/apollo/vars/cartVar';
import { closeCart, showCartVar } from 'utils/apollo/vars/showCartVar';
import CartModal from './CartModal/CartModal';

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }): JSX.Element => {
  const showCart = useReactiveVar(showCartVar);

  useEffect(() => {
    initCart();
  }, []);

  return (
    <>
      {children}

      <CartModal open={showCart} onClose={closeCart} />
    </>
  );
};

export default CartProvider;
