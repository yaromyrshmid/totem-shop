import { SysId } from './core/SysId';

export type ProductPreview = {
  sys: SysId;
  slug: string;
  mainImage: {
    url: string;
  };
  name: string;
  price: number;
};

type ColorPreview = {
  sys: SysId;
  color: string;
  slug: string;
  hexColor: string;
  mainImage: {
    url: string;
  };
};

export type ProductPreviewWithColorCollection = ProductPreview & {
  colorsCollection: {
    items: Array<ColorPreview>;
  };
};
