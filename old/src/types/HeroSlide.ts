import { GatsbyImageFluidProps } from 'gatsby-image';

export type HeroSlide = {
  id: string;
  image: GatsbyImageFluidProps;
  title: string;
  subtitle?: string;
  position: 'center' | 'top-right' | 'bottom-left' | 'bottom-right';
  link: string;
  textAlign: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
};

export interface IHeroSlideNode {
  node: HeroSlide;
}
