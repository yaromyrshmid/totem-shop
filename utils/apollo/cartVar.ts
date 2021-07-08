import { makeVar, ReactiveVar } from '@apollo/client';

import { CartItem } from 'domain/types';
import {
  LOCAL_STORAGE_KEYS,
  readLocalStorage,
  writeLocalStorage
} from 'utils/helpers/localStorage';

export const cartVar: ReactiveVar<CartItem[]> = makeVar<CartItem[]>([]);

export const clientInitCart = () => {
  const cartFromLocalStorage = readLocalStorage(LOCAL_STORAGE_KEYS.cart);

  cartVar(cartFromLocalStorage || []);
};

export const clientAddToCart = (productId: string) => {
  const previosCart = cartVar();

  const updatedCart = addToCartItems(previosCart, productId);

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
