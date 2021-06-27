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
