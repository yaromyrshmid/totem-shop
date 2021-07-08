import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, Badge } from '@material-ui/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useReactiveVar } from '@apollo/client';

import { cartVar } from 'utils/apollo/cartVar';

interface CartHeaderIconProps {
  onClick: () => void;
}

const CartHeaderIcon: React.FC<CartHeaderIconProps> = ({ onClick }): JSX.Element => {
  const cart = useReactiveVar(cartVar);

  return (
    <IconButton aria-label="cart" color="primary" onClick={onClick}>
      <Badge badgeContent={cart.length} color="secondary" invisible={!cart.length} max={9}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </Badge>
    </IconButton>
  );
};

export default CartHeaderIcon;
