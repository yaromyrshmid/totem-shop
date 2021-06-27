import { SysId } from './core/SysId';

export type Category = {
  sys: SysId;
  name: string;
  slug: string;
  image: {
    url: string;
    title: string;
  };
};

export type CategorySlugOnly = {
  slug: string;
};
