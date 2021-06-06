import React from 'react';

import HeroSlider from './HeroSlider/HeroSlider';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import CategoryTiles from './HeroSlider/CategoryTiles/CategoryTiles';

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <HeroSlider />

      <FeaturedProducts />

      <CategoryTiles />
    </>
  );
};

Home.propTypes = {};

export default Home;
