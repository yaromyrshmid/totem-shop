import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton } from '@material-ui/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

interface CartHeaderIconProps {
  onClick: () => void;
}

const CartHeaderIcon: React.FC<CartHeaderIconProps> = ({ onClick }): JSX.Element => {
  return (
    <IconButton aria-label="cart" color="primary" onClick={onClick}>
      <FontAwesomeIcon icon={faShoppingCart} />
    </IconButton>
  );
};

export default CartHeaderIcon;
