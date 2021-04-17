import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Box, makeStyles } from '@material-ui/core';
import classnames from 'classnames';

import ItemContent from './ItemContent';
import { HeroSlide } from '../../../../types/HeroSlide';

interface HeroSliderItemProps {
  item: HeroSlide;
}

const HeroSliderItem: React.FC<HeroSliderItemProps> = ({
  item: { id, image, title, subtitle, position, link, textAlign }
}: HeroSliderItemProps): JSX.Element => {
  const classes = useStyles();

  return (
    <BackgroundImage Tag={'article'} id={id} fluid={image.fluid} className={classes.image}>
      <Box className={classnames(classes.contentContainer, position && classes[position])}>
        <ItemContent title={title} subtitle={subtitle} link={link} textAlign={textAlign} />
      </Box>
    </BackgroundImage>
  );
};

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    height: '70vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.primary.main
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
