import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, makeStyles } from '@material-ui/core';

const LinkedLogo: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Link href="/">
      <Box className={classes.logoContainer}>
        <Image src="/logo.png" alt="Totem notes logo" width={54} height={54} />
      </Box>
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    height: 70,
    width: 70,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginRight: theme.spacing(2.5)
  },
  logo: {
    height: '100%'
  }
}));

export default LinkedLogo;
