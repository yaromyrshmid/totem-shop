import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  ImageWithZoom
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Image from 'next/image';

import { Image as ImageType } from 'domain/types';
import { makeStyles, Box } from '@material-ui/core';
import { useScrollBarStyles } from 'theme/scrollBar';
import classnames from 'classnames';

interface ProductGalleryProps {
  images: Array<ImageType>;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }): JSX.Element => {
  const classes = useStyles();
  const scrollBarClasses = useScrollBarStyles();

  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={images.length}
        //   currentSlide={props.currentSlide}
      >
        <Box className={classes.carouselContent}>
          <Slider className={classes.slider}>
            {images.map((image, index) => (
              <Slide index={index} key={image.url}>
                <ImageWithZoom src={image.url} />
              </Slide>
            ))}
          </Slider>

          <Box className={classnames(classes.dotsContainer, scrollBarClasses.vertical)}>
            {images.map(({ url }, index) => (
              <Dot slide={index} key={`dot-${url}`} className={classes.dot}>
                <Image src={url} height={200} width={200} />
              </Dot>
            ))}
          </Box>
        </Box>
      </CarouselProvider>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  carouselContent: {},
  slider: {
    margin: 'auto',
    maxHeight: 450,
    maxWidth: 450
  },
  dotsContainer: {
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    marginTop: theme.spacing(1)
  },
  dot: {
    display: 'inline',
    width: 90
  }
}));

export default ProductGallery;
