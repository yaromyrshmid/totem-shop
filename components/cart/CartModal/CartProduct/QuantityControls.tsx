import React from 'react';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

interface QuantityControlsProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantityControls: React.FC<QuantityControlsProps> = ({
  quantity,
  onIncrease,
  onDecrease
}): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Button
        onClick={onDecrease}
        disabled={!quantity}
        variant="outlined"
        color="primary"
        className={classes.button}
      >
        <FontAwesomeIcon icon={faMinus} />
      </Button>

      <Typography variant="body1" component="span">
        {quantity}
      </Typography>

      <Button onClick={onIncrease} variant="outlined" color="primary" className={classes.button}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    gap: theme.spacing(1.5),
    alignItems: 'center'
  },
  button: {
    minWidth: 'unset',
    padding: `${theme.spacing(1)}px ${theme.spacing(1.5)}px`
  }
}));

export default QuantityControls;
