import React, { useContext } from 'react';
import { Container, Divider, makeStyles, Grid } from '@material-ui/core';

import FooterNav from './FooterNav';
import Contacts from './Contacts';
import { PageMetaContext } from 'utils/context/PageMetaContext';
import Copyright from './Copyright';

interface FooterProps {
  hideNavigation?: boolean;
}

const Footer: React.FC<FooterProps> = ({ hideNavigation = false }): JSX.Element => {
  const classes = useStyles();
  const { instagramUrl, viber, telegram, phoneNumber } = useContext(PageMetaContext);

  if (hideNavigation) {
    return (
      <Container component="footer" className={classes.container}>
        <Divider />
        <Grid item xs={12}>
          <Copyright />
        </Grid>
      </Container>
    );
  }

  return (
    <Container component="footer" className={classes.container}>
      <Divider />

      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <FooterNav />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Contacts
            instagramUrl={instagramUrl}
            viber={viber}
            telegram={telegram}
            phoneNumber={phoneNumber}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <Copyright />
        </Grid>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4)
  }
}));

export default Footer;
