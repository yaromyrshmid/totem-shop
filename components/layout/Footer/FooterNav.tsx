import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import Link from 'next/link';

import { navLinks } from '../Shared/NavItems';
import CustomA from 'components/ui/links/CustomA';

const FooterNav: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {navLinks.map(({ href, title }) => (
        <Link href={href} key={href} passHref>
          <CustomA className={classes.item}>
            <Typography variant="h5">{title}</Typography>
          </CustomA>
        </Link>
      ))}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  item: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    ['&:hover']: {
      color: theme.palette.primary.main
    }
  }
}));

export default FooterNav;
