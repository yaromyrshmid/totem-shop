import React from "react"
import PropTypes from "prop-types"

import HeroSlider from "./HeroSlider/HeroSlider"
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts"

const Home = () => {
  return (
    <>
      <HeroSlider />

      <FeaturedProducts />
    </>
  )
}

Home.propTypes = {}

export default Home
