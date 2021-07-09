import React from 'react';
import { useReactiveVar } from '@apollo/client';

import Modal from 'components/ui/Modal';
import { useCartProducts } from 'utils/hooks/useCartProducts';
import { cartVar, addToCart, substractFromCart } from 'utils/apollo/cartVar';
import CartProduct from './CartProduct/CartProduct';

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose, open }): JSX.Element => {
  const cart = useReactiveVar(cartVar);

  const { products, loading, error } = useCartProducts();

  console.log({ products, loading, error });

  return (
    <Modal open={open} onClose={onClose} title="Кошик">
      {products.map((product) => (
        <CartProduct
          key={product.sys.id}
          product={product}
          quantity={cart.find(({ id }) => id === product.sys.id)?.quantity}
          onIncrease={() => addToCart(product.sys.id)}
          onDecrease={() => substractFromCart(product.sys.id)}
        />
      ))}
    </Modal>
  );
};

export default CartModal;
