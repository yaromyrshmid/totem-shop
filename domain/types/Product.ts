import { SysId } from './core/SysId';

export type ProductSlugOnly = {
  slug: string;
  category: {
    slug: string;
  };
};

export type ColoredProduct = {
  color: string;
  slug: string;
  imagesCollection: Array<{ url: string }>;
  available: boolean;
  sys: SysId;
};

export type Product = {
  name: string;
  price: number;
  description: {
    json: JSON;
  };
  mainImage: {
    url: string;
  };
  colorsCollection: Array<ColoredProduct>;
};
