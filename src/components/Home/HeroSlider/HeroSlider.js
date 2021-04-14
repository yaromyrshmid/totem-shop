import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader

import HeroSliderItem from "./HeroSliderItem"

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
      swipeable
      emulateTouch
      infiniteLoop
      showIndicators
      showStatus={false}
      showThumbs={false}
      stopOnHover
      autoPlay
      interval={4000}
    >
      {heroSliders.map((item) => (
        <HeroSliderItem item={item} key={item.id} />
      ))}
    </Carousel>
  )
}

export default HeroSlider
