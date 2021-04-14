import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import HeroSliderItem from "./HeroSliderItem"
import Carousel from "../../ui/Carousel"

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
`

const HeroSlider = () => {
  const heroSliders = useStaticQuery(getHeroSliders).sliders.edges.map(
    ({ node }) => node
  )

  return (
    <Carousel
      slidesToScroll={1}
      slidesToShow={1}
      arrows={false}
      autoplay
      autoplaySpeed={4000}
    >
      {heroSliders.map((item) => (
        <HeroSliderItem item={item} key={item.id} />
      ))}
    </Carousel>
  )
}

export default HeroSlider
