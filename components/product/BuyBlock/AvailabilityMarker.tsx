import React from 'react';
import { makeStyles, Box, Typography, useTheme } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';

interface AvailabilityMarkerProps {
  available: boolean;
}

const AvailabilityMarker: React.FC<AvailabilityMarkerProps> = ({ available }): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box className={classes.container}>
      {available ? (
        <>
          <FontAwesomeIcon
            icon={faCheckCircle}
            className={classes.icon}
            color={theme.palette.success.dark}
          />

          <Typography variant="body1" className={classes.textSuccess}>
            в наявності
          </Typography>
        </>
      ) : (
        <>
          <FontAwesomeIcon
            icon={faTimesCircle}
            className={classes.icon}
            color={theme.palette.error.light}
          />

          <Typography variant="body1" className={classes.textError}>
            немає в наявності
          </Typography>
        </>
      )}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    marginRight: theme.spacing(0.75),
    fontSize: '1.1rem'
  },
  textSuccess: {
    color: theme.palette.success.dark
  },
  textError: {
    color: theme.palette.error.light
  }
}));

export default AvailabilityMarker;
