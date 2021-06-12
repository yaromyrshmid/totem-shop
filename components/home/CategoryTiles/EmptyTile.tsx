import React from 'react';
import { makeStyles, Box } from '@material-ui/core';

const EmptyTile = () => {
  const classes = useStyles();

  return <Box className={classes.tile}></Box>;
};

const useStyles = makeStyles((theme) => ({
  tile: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.text.disabled,
    opacity: 0.3
  }
}));

export default EmptyTile;
