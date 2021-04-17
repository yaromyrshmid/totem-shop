import { GatsbyImageProps } from 'gatsby-image';

export type Category = {
  category: string;
  slug: string;
  id: string;
  image: GatsbyImageProps;
};

export interface ICategoryNode {
  node: Category;
}
