import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';

interface CarouselProps {
  children: React.ReactNode;
  settings: Settings;
}

const Carousel: React.FC<CarouselProps> = ({ children, ...props }: CarouselProps): JSX.Element => (
  <Slider arrows={false} {...props}>
    {children}
  </Slider>
);

export default Carousel;
