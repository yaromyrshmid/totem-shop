import React from "react"
import PropTypes from "prop-types"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"

const Carousel = ({ children, ...props }) => {
  return <Slider {...props}>{children}</Slider>
}

Carousel.propTypes = {}

export default Carousel
