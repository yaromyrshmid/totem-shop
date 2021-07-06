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
import { makeStyles, Box, useTheme } from '@material-ui/core';
import { useScrollBarStyles } from 'theme/scrollBar';
import classnames from 'classnames';

interface ProductGalleryProps {
  images: Array<ImageType>;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const scrollBarClasses = useScrollBarStyles();

  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={images.length}
        className={classes.container}
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
            <style>
              {`.carousel__dot--selected {
                    border-color: ${theme.palette.primary.main};
                }`}
            </style>

            {images.map(({ url }, index) => (
              <Dot slide={index} key={`dot-${url}`} className={classes.dot}>
                <Image src={url} height={previewImageSize} width={previewImageSize} />
              </Dot>
            ))}
          </Box>
        </Box>
      </CarouselProvider>
    </div>
  );
};

const previewImageSize = 100;
const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(2)
  },
  carouselContent: {},
  slider: {
    margin: 'auto',
    maxHeight: 450,
    maxWidth: 450
  },
  dotsContainer: {
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    marginTop: theme.spacing(1),
    maxWidth: 450,
    margin: 'auto'
  },
  dot: {
    display: 'inline',
    width: previewImageSize,
    height: previewImageSize,
    padding: 0,
    backgroundColor: theme.palette.common.white,
    borderWidth: 2,
    borderColor: theme.palette.common.white,
    borderStyle: 'solid'
  }
}));

export default ProductGallery;
