import React from 'react';
import { useReactiveVar } from '@apollo/client';

import Modal from 'components/ui/Modal';
import { useCartProducts } from 'utils/hooks/useCartProducts';
import { cartVar } from 'utils/apollo/cartVar';

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose, open }): JSX.Element => {
  const cart = useReactiveVar(cartVar);

  const { products, loading, error } = useCartProducts();

  console.log({ products, loading, error });

  return (
    <Modal open={open} onClose={onClose} title="test">
      <p>test</p>
    </Modal>
  );
};

export default CartModal;
