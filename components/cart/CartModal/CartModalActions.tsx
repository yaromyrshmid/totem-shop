import React from 'react';
import { Button } from '@material-ui/core';

interface CartModalActionsProps {
  onClose: () => void;
  onCheckout: () => void;
}

const CartModalActions: React.FC<CartModalActionsProps> = ({ onClose, onCheckout }) => (
  <>
    <Button onClick={onClose} color="primary">
      Продовжити покупки
    </Button>

    <Button onClick={onCheckout} color="primary" variant="contained">
      Оформити замовлення
    </Button>
  </>
);

export default CartModalActions;
