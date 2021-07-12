import { Image, SysId } from './core';

export type CartProduct = {
  sys: SysId;
  slug: string;
  mainImage: Image;
  name: string;
  price: number;
  category: {
    slug: string;
  };
};

type LinkedCartProduct = {
  sys: SysId;
  slug: string;
  name: string;
  price: number;
  category: {
    slug: string;
  };
};

export type ColoredCartProduct = {
  sys: SysId;
  slug: string;
  mainImage: Image;
  color: string;
  linkedFrom: {
    productCollection: {
      items: Array<LinkedCartProduct>;
    };
  };
};

export type CartProductWQuantity = CartProduct & {
  quantity: number;
};
