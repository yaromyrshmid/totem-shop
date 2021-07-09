import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

interface TotalPriceProps {
  price: number;
}

const TotalPrice: React.FC<TotalPriceProps> = ({ price }): JSX.Element => {
  const classes = useStyles();

  return (
    <Typography variant="h5" className={classes.text}>
      Всього: <span className={classes.emphasized}>{price} грн</span>
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  text: {
    marginTop: theme.spacing(1),
    textAlign: 'end'
  },
  emphasized: { color: theme.palette.primary.main }
}));

export default TotalPrice;
