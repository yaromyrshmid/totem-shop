import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

interface ProductTitleProps {
  name: string;
  colorName: string | undefined;
}

const ProductTitle: React.FC<ProductTitleProps> = ({ name, colorName }): JSX.Element => {
  const classes = useStyles();

  return (
    <Typography variant="h1" component="h1" className={classes.title}>
      {name}
      {colorName && ` - ${colorName}`}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    fontSize: '1.2rem',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.6rem'
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2rem'
    }
  }
}));

export default ProductTitle;
