import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, makeStyles } from '@material-ui/core';

const LinkedLogo: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Link href="/">
      <Box className={classes.logoContainer}>
        <img src="/logo.svg" alt="Totem logo" className={classes.logo} />
      </Box>
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    paddingTop: theme.spacing(1)
  },
  logo: {
    height: 54
  }
}));

export default LinkedLogo;
