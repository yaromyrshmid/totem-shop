import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegramPlane, faViber } from '@fortawesome/free-brands-svg-icons';

import CustomA from 'components/ui/links/CustomA';

interface ContactsProps {
  instagramUrl: string | undefined;
  viber: string | undefined;
  telegram: string | undefined;
  phoneNumber: string | undefined;
}

const Contacts: React.FC<ContactsProps> = ({
  instagramUrl,
  viber,
  telegram,
  phoneNumber
}): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.socialContainer}>
        {instagramUrl && (
          <CustomA href={instagramUrl}>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </CustomA>
        )}

        {viber && (
          <CustomA href={`viber://chat/?number=%2B${viber}`}>
            <FontAwesomeIcon icon={faViber} size="2x" />
          </CustomA>
        )}

        {telegram && (
          <CustomA href={`https://telegram.me/${telegram}`}>
            <FontAwesomeIcon icon={faTelegramPlane} size="2x" />
          </CustomA>
        )}
      </Box>

      {phoneNumber && (
        <CustomA href={`tel:${phoneNumber}`}>
          <Typography component="h5" className={classes.phoneNumber}>
            {phoneNumber}
          </Typography>
        </CustomA>
      )}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2)
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(3)
  },
  phoneNumber: {
    textAlign: 'center',
    marginTop: theme.spacing(2)
  }
}));

export default Contacts;
