import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

interface CheckoutHeaderProps {
  total: number;
  onEdit: () => void;
}

const CheckoutHeader: React.FC<CheckoutHeaderProps> = ({ total, onEdit }): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title} variant="h5" component="h1">
        Замовлення на суму: <span className={classes.emphasized}>{total.toFixed(0)} грн</span>
      </Typography>

      <Box className={classes.editContainer} onClick={onEdit}>
        <FontAwesomeIcon icon={faEdit} />

        <Typography variant="h6">(редагувати)</Typography>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    alignItems: 'center'
  },
  title: {
    fontWeight: 600,
    marginRight: theme.spacing(2)
  },
  emphasized: {
    color: theme.palette.primary.main,
    fontWeight: 600
  },
  editContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    ['&:hover']: {
      cursor: 'pointer'
    }
  }
}));

export default CheckoutHeader;
