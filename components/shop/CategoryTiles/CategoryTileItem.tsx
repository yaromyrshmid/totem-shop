import React from 'react';
import Image from 'next/image';
import { Box, makeStyles, Typography } from '@material-ui/core';

import { Category } from 'domain/types';

interface CategoryTileProps {
  category: Category;
}

const CategoryTileItem: React.FC<CategoryTileProps> = ({
  category: {
    image: { url },
    name
  }
}): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.overlay} />

      <Typography variant="h5" component="h3" color="secondary" className={classes.title}>
        {name}
      </Typography>

      <Box className={classes.imageContainer}>
        <Image src={url} layout="fill" objectFit="cover" quality={100} />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  title: {
    textAlign: 'center',
    color: theme.palette.common.white
  },
  overlay: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: theme.palette.common.white,
    opacity: 0,
    transition: 'opacity 750ms',
    ['&:hover']: {
      opacity: 0.3
    }
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    zIndex: -1
  }
}));

export default CategoryTileItem;
