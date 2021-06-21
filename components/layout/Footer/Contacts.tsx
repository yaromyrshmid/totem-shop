import React from 'react';
import { Container, Divider, makeStyles, Box } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import CustomA from 'components/ui/links/CustomA';

const Contacts = () => {
  const classes = useStyles();

  return (
    <Box>
      <CustomA href="https://www.instagram.com/totemnotes">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </CustomA>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  }
}));

export default Contacts;
