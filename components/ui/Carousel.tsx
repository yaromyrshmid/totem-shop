import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';

interface CarouselProps {
  children: React.ReactNode;
  settings: Settings;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  settings,
  ...props
}: CarouselProps): JSX.Element => (
  <Slider arrows={false} {...settings} {...props} draggable>
    {children}
  </Slider>
);

export default Carousel;
