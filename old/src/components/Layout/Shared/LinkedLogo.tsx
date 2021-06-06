import React from 'react';
import { Link } from 'gatsby';
import { Box, makeStyles } from '@material-ui/core';

import logo from '../../../assets/logo.png';

const LinkedLogo: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Link to="/">
      <Box className={classes.logoContainer}>
        <img src={logo} alt="Logo" className={classes.logo} />
      </Box>
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    height: 70,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginRight: theme.spacing(2.5)
  },
  logo: {
    height: '100%'
  }
}));

export default LinkedLogo;
