export type HeroSlide = {
  id: string;
  title: string;
  subtitle?: string;
  position: 'center' | 'top-right' | 'bottom-left' | 'bottom-right';
  link: string;
  textAlign: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
  image: {
    url: string;
  };
};
