import React from 'react';
import { useRouter } from 'next/router';

import Modal from 'components/ui/Modal';
import { useCartProducts } from 'utils/hooks/useCartProducts';
import { addToCart, substractFromCart, removeFromCart } from 'utils/apollo/vars/cartVar';
import CartProduct from './CartProduct/CartProduct';
import { countTotalPrice } from 'utils/helpers/countTotalPrice';
import TotalPrice from './TotalPrice';
import CartModalActions from './CartModalActions';

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose, open }): JSX.Element => {
  const { push } = useRouter();

  const { products } = useCartProducts();

  const handleCheckout = () => {
    onClose();
    push('/checkout');
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Кошик"
      actionsComponent={<CartModalActions onClose={onClose} onCheckout={handleCheckout} />}
    >
      {products.map((product) => (
        <CartProduct
          key={product.sys.id}
          product={product}
          onIncrease={() => addToCart(product.sys.id)}
          onDecrease={() => substractFromCart(product.sys.id)}
          onRemove={() => removeFromCart(product.sys.id)}
        />
      ))}

      <TotalPrice price={countTotalPrice(products)} />
    </Modal>
  );
};

export default CartModal;
