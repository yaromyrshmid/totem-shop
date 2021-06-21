import React from 'react';
import { Container, Divider, makeStyles, Grid } from '@material-ui/core';

import LinkedLogo from '../Shared/LinkedLogo';
import FooterNav from './FooterNav';
import Contacts from './Contacts';

const Footer: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Container component="footer" className={classes.container}>
      <Divider />

      <Grid container>
        <Grid item xs={12}>
          <FooterNav />
        </Grid>

        <Grid item xs={12}>
          <Contacts />
        </Grid>

        <Grid item xs={12}>
          <LinkedLogo />
          <p>© {new Date().getFullYear()}, Footer</p>
        </Grid>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  }
}));

export default Footer;
