import React, { useMemo } from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';

import LinkedLogo from '../Shared/LinkedLogo';

const Copyright: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <Box className={classes.copyrightContainer}>
      <LinkedLogo />
      <Typography>©TotemNotes, {year}</Typography>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  copyrightContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
}));

export default Copyright;
