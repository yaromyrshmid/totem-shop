import React from 'react';
import Link from 'next/link';
import { Box, makeStyles } from '@material-ui/core';

import CustomA from 'components/ui/links/CustomA';

const LinkedLogo: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Link href="/" passHref>
      <CustomA>
        <img src="/logo.svg" alt="Totem logo" className={classes.logo} />
      </CustomA>
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 54
  }
}));

export default LinkedLogo;
