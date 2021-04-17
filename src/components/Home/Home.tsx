import React from 'react';

import HeroSlider from './HeroSlider/HeroSlider';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <HeroSlider />

      <FeaturedProducts />
    </>
  );
};

Home.propTypes = {};

export default Home;
