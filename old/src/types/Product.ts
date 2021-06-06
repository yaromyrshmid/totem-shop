import { GatsbyImageFluidProps } from 'gatsby-image';

export type ProductPreview = {
  id: string;
  slug: string;
  category?: string;
  mainImage: GatsbyImageFluidProps;
  name: string;
  price: number;
};

export interface IProductPreviewNode {
  node: ProductPreview;
}
