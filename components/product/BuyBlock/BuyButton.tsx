import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, makeStyles } from '@material-ui/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

interface BuyButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const BuyButton: React.FC<BuyButtonProps> = ({ onClick, disabled }): JSX.Element => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<FontAwesomeIcon icon={faCartPlus} color="white" />}
      onClick={onClick}
      size="large"
      className={classes.button}
      disabled={disabled}
    >
      Купити
    </Button>
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    width: '100%'
  }
}));

export default BuyButton;
