import { CartProductWQuantity } from 'domain/types';

export const countTotalPrice = (cartProducts: CartProductWQuantity[]): number => {
  const totalPrice = cartProducts.reduce((currentTotal, product) => {
    if (product) return currentTotal + product.price * product.quantity;

    return currentTotal;
  }, 0);

  return totalPrice;
};
