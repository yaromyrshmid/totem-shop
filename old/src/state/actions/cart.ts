import * as actionTypes from './actionTypes';

interface IActionReturn {
  type: string;
  // All other props
  [x: string]: unknown;
}

export const addToCart = (id: string): IActionReturn => {
  return {
    type: actionTypes.ADD_TO_CART,
    id
  };
};

export const removeFromCart = (id) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    id: id
  };
};

export const addQuantity = (id) => {
  return {
    type: actionTypes.ADD_QUANTITY,
    id: id
  };
};

export const substractQuantity = (id) => {
  return {
    type: actionTypes.SUBSTRACT_QUANTITY,
    id: id
  };
};

export const toggleCart = () => {
  return {
    type: actionTypes.TOOGLE_CART
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART
  };
};
