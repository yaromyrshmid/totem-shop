import React from 'react';

import Modal from 'components/ui/Modal';

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose, open }): JSX.Element => {
  return (
    <Modal open={open} onClose={onClose} title="test">
      <p>test</p>
    </Modal>
  );
};

export default CartModal;
