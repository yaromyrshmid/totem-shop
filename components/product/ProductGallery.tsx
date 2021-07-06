import React from 'react';
import { CarouselProvider, Slider, Slide, Dot, ImageWithZoom } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Image from 'next/image';
import { makeStyles, Box, useTheme } from '@material-ui/core';
import classnames from 'classnames';

import { Image as ImageType } from 'domain/types';
import { scrollBarStyles } from 'theme/scrollBar';

interface ProductGalleryProps {
  images: Array<ImageType>;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={images.length}
        className={classes.container}
      >
        <Slider className={classes.slider}>
          {images.map((image, index) => (
            <Slide index={index} key={image.url}>
              <ImageWithZoom src={image.url} />
            </Slide>
          ))}
        </Slider>

        <Box className={classes.dotsContainer}>
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
      </CarouselProvider>
    </div>
  );
};

const imageSize = 450;
const previewImageSize = 100;
const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: theme.spacing(1)
    }
  },
  slider: {
    margin: 'auto',
    maxHeight: imageSize,
    maxWidth: imageSize,
    [theme.breakpoints.up('sm')]: {
      height: imageSize,
      width: imageSize,
      margin: 0
    }
  },
  dotsContainer: {
    whiteSpace: 'nowrap',
    marginTop: theme.spacing(1),
    maxWidth: imageSize,
    margin: 'auto',
    [theme.breakpoints.only('xs')]: {
      overflowX: 'auto',
      ...scrollBarStyles.horizontal
    },
    [theme.breakpoints.up('sm')]: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      height: imageSize,
      overflowY: 'auto',
      overflowX: 'hidden',
      ...scrollBarStyles.vertical
    }
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
