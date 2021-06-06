import React from 'react';
import { Box } from '@material-ui/core';

import HeroSliderItem from './HeroSliderItem/HeroSliderItem';
import Carousel from '../../ui/Carousel';
import { HeroSlide } from 'domain/types';

interface HeroSliderProps {
  heroSlides: Array<HeroSlide>;
}

const HeroSlider: React.FC<HeroSliderProps> = ({ heroSlides }): JSX.Element => {
  return (
    <Box mb={5}>
      <Carousel
        settings={{
          slidesToScroll: 1,
          slidesToShow: 1,
          arrows: false,
          autoplay: false,
          autoplaySpeed: 4000
        }}
      >
        {heroSlides.map((item) => (
          <HeroSliderItem item={item} key={item.id} />
        ))}
      </Carousel>
    </Box>
  );
};

export default HeroSlider;
