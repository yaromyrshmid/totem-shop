import React from "react"
import Image from "gatsby-image"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  ImageWithZoom,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import styled from "styled-components"

const Carousel = props => {
  const images = props.images

  return (
    <CarouselWrapper>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={images.length}
        currentSlide={props.currentSlide}
      >
        <ContentWrapper>
          <SlidesWrapper>
            <Slider>
              {images.map((image, index) => (
                <Slide index={index} key={image.id}>
                  <ImageWithZoom src={image.fluid.src} />
                </Slide>
              ))}
            </Slider>
          </SlidesWrapper>
          <PreviewsWrapper>
            {images.map((image, index) => (
              <Dot slide={index} key={`dot-${index}`}>
                <Image
                  key={image.id}
                  fluid={image.fluid}
                  style={{ width: "200px" }}
                />
              </Dot>
            ))}
          </PreviewsWrapper>
        </ContentWrapper>
      </CarouselProvider>
    </CarouselWrapper>
  )
}

const CarouselWrapper = styled.div`
  margin-bottom: 3rem;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const SlidesWrapper = styled.div`
  width: 300px;
  height: 300px;
`

const PreviewsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .carousel__dot {
    opacity: 0.4;
  }

  .carousel__dot--selected {
    opacity: 1;
  }
`

export default Carousel
