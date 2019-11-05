import React, { useState } from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const getHeroSliders = graphql`
  query {
    sliders: allContentfulHeroSlider(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          title
          subtitle
          id
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
  const heroSliders = useStaticQuery(getHeroSliders).sliders.edges
  const [activeSlide, setActiveSlide] = useState(0)

  const handlePrevClick = () => {
    setActiveSlide(prev => (prev - 1 + heroSliders.length) % heroSliders.length)
  }

  const handleNextClick = () => {
    setActiveSlide(prev => (prev + 1) % heroSliders.length)
  }

  return (
    <>
      {heroSliders.length > 0 && (
        <HeroSliderWrapper>
          <SlideWrapper
            Tag={"div"}
            id={"heroSlider"}
            fluid={heroSliders[activeSlide].node.image.fluid}
          >
            {heroSliders.length > 1 && (
              <ArrowLeft onClick={handlePrevClick}>{`<=`}</ArrowLeft>
            )}
            <h1>{heroSliders[activeSlide].node.title}</h1>
            <h3>{heroSliders[activeSlide].node.subtitle}</h3>
            {heroSliders.length > 1 && (
              <ArrowRight onClick={handleNextClick}>{`=>`}</ArrowRight>
            )}
          </SlideWrapper>
        </HeroSliderWrapper>
      )}
    </>
  )
}

const HeroSliderWrapper = styled.section`
  width: 100%;
  min-height: 40rem;
`

const SlideWrapper = styled(BackgroundImage)`
  width: 100%;
  height: 40rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  h1 {
    color: white;
  }
`

const ArrowLeft = styled.span`
  position: absolute;
  top: 45%;
  left: 0;
`

const ArrowRight = styled.span`
  position: absolute;
  top: 45%;
  right: 0;
`

export default HeroSlider
