import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import HeroSliderItem from './HeroSliderItem/HeroSliderItem';
import Carousel from '../../ui/Carousel';
import { HeroSlide, IHeroSlideNode } from '../../../types/HeroSlide';
import { Box } from '@material-ui/core';

const getHeroSliders = graphql`
  query {
    sliders: allContentfulHeroSlider(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          title
          subtitle
          position
          textAlign
          link
          image {
            fluid(maxWidth: 4000) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

const HeroSlider: React.FC = (): JSX.Element => {
  const heroSliders: Array<HeroSlide> = useStaticQuery(getHeroSliders).sliders.edges.map(
    ({ node }: IHeroSlideNode) => node
  );

  return (
    <Box mb={5}>
      <Carousel
        settings={{
          slidesToScroll: 1,
          slidesToShow: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 4000
        }}
      >
        {heroSliders.map((item) => (
          <HeroSliderItem item={item} key={item.id} />
        ))}
      </Carousel>
    </Box>
  );
};

export default HeroSlider;
