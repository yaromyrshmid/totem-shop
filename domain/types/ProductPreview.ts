import { Image, SysId } from './core';

export type ProductPreview = {
  sys: SysId;
  slug: string;
  mainImage: Image;
  name: string;
  price: number;
  category: {
    slug: string;
  };
};

export type ColorPreview = {
  sys: SysId;
  color: string;
  slug: string;
  hexColor: string;
  mainImage: Image;
};

export type ProductPreviewWithColorCollection = ProductPreview & {
  colorsCollection: {
    items: Array<ColorPreview>;
  };
};
