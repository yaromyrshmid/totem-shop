import React from 'react';
import { makeStyles } from '@material-ui/core';

interface CustomAProps {
  children: React.ReactNode;
}

const CustomA: React.FC<CustomAProps> = ({ children, ...props }): JSX.Element => {
  const classes = useStyles();

  return (
    <a className={classes.link} {...props}>
      {children}
    </a>
  );
};

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
    ['&:hover']: {
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }
}));

export default CustomA;
