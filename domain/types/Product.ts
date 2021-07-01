import { Image, SysId } from './core';
import { ProductPreview } from './ProductPreview';

export type ProductSlugOnly = {
  slug: string;
  category: {
    slug: string;
  };
};

export type ProductIdOnly = {
  sys: SysId;
};

export type ColoredProduct = {
  color: string;
  slug: string;
  mainImage: Image;
  imagesCollection: { items: Array<Image> };
  available: boolean;
  sys: SysId;
};

export type Product = {
  sys: SysId;
  name: string;
  price: number;
  description: {
    json: JSON;
  };
  mainImage: Image;
  imagesCollection: { items: Array<Image> };
  category: {
    name: string;
    slug: string;
  };
  youMayAlsoLikeCollection: {
    items: Array<ProductPreview>;
  };
  colorsCollection: { items: Array<ColoredProduct> };
};
