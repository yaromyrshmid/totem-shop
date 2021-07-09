import { makeVar, ReactiveVar } from '@apollo/client';

import { CartItem } from 'domain/types';
import {
  LOCAL_STORAGE_KEYS,
  readLocalStorage,
  writeLocalStorage
} from 'utils/helpers/localStorage';

export const cartVar: ReactiveVar<CartItem[]> = makeVar<CartItem[]>([]);

export const initCart = () => {
  const cartFromLocalStorage = readLocalStorage(LOCAL_STORAGE_KEYS.cart);

  cartVar(cartFromLocalStorage || []);
};

export const addToCart = (productId: string) => {
  const previosCart = cartVar();

  const updatedCart = addToCartItems(previosCart, productId);

  updateCart(updatedCart);
};

export const substractFromCart = (productId: string) => {
  const previosCart = cartVar();

  const updatedCart = substractFromCartItems(previosCart, productId);

  updateCart(updatedCart);
};

export const removeFromCart = (productId: string) => {
  const previosCart = cartVar();

  const updatedCart = previosCart.filter(({ id }) => id !== productId);
  updateCart(updatedCart);
};

const updateCart = (updatedCart: CartItem[]) => {
  cartVar(updatedCart);
  writeLocalStorage(LOCAL_STORAGE_KEYS.cart, updatedCart);
};

const addToCartItems = (previosCart: CartItem[], productId: string): Array<CartItem> => {
  const itemInCart = previosCart.find(({ id }) => id === productId);

  if (itemInCart)
    return previosCart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );

  return [...previosCart, { id: productId, quantity: 1 }];
};

const substractFromCartItems = (previosCart: CartItem[], productId: string): Array<CartItem> =>
  previosCart.map((item) => {
    if (item.id === productId && item.quantity) return { ...item, quantity: item.quantity - 1 };

    return item;
  });
