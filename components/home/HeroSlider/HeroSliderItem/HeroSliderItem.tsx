import React from 'react';
import Image from 'next/image';
import { Box, makeStyles } from '@material-ui/core';
import classnames from 'classnames';

import ItemContent from './ItemContent';
import { HeroSlide } from 'domain/types';

interface HeroSliderItemProps {
  item: HeroSlide;
}

const HeroSliderItem: React.FC<HeroSliderItemProps> = ({
  item: { image, title, subtitle, position, link, textAlign }
}: HeroSliderItemProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box component="article" className={classes.container}>
      <Box className={classnames(classes.contentContainer, classes[position])}>
        <ItemContent title={title} subtitle={subtitle} link={link} textAlign={textAlign} />
      </Box>

      <Box className={classes.imageContainer}>
        <Image
          src={image.url}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
        />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '70vh',
    position: 'relative'
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    zIndex: -1
  },
  contentContainer: {
    height: '70vh',
    display: 'flex',
    alignItems: 'flex-start',
    padding: theme.spacing(2)
  },
  content: {
    textAlign: 'initial',
    padding: theme.spacing(2)
  },
  linkedContent: {
    '&:hover': {
      opacity: 0.7,
      transition: 'opacity 300ms',
      textDecoration: 'none'
    }
  },
  ['center']: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  ['top-right']: {
    justifyContent: 'flex-end'
  },
  ['bottom-left']: {
    alignItems: 'flex-end'
  },
  ['bottom-right']: {
    alignItems: 'flex-end',
    justifyContent: 'flext-end'
  }
}));

export default HeroSliderItem;
