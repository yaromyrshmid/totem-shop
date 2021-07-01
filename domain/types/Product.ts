import { SysId } from './core/SysId';
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
  imagesCollection: Array<{ url: string }>;
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
  mainImage: {
    url: string;
  };
  category: {
    name: string;
    slug: string;
  };
  youMayAlsoLikeCollection: {
    items: Array<ProductPreview>;
  };
  colorsCollection: { items: Array<ColoredProduct> };
};
