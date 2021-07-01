import { Image } from './core/Image';
import { SysId } from './core/SysId';

export type HeroSlide = {
  sys: SysId;
  title: string;
  subtitle?: string;
  position: 'center' | 'top-right' | 'bottom-left' | 'bottom-right';
  link: string;
  textAlign: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
  image: Image;
};
