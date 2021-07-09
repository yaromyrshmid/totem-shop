import { CartItem, CartProduct } from 'domain/types';

export const countTotalPrice = (cart: CartItem[], cartProducts: CartProduct[]): number => {
  const totalPrice = cart.reduce((currentTotal, cartItem) => {
    const product = cartProducts.find(({ sys: { id } }) => id === cartItem.id);

    if (product) return currentTotal + product.price * cartItem.quantity;

    return currentTotal;
  }, 0);

  return totalPrice;
};
