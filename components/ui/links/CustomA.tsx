import React from 'react';
import { makeStyles } from '@material-ui/core';
import classnames from 'classnames';

interface CustomAProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

const CustomA: React.FC<CustomAProps> = ({ children, className, ...props }): JSX.Element => {
  const classes = useStyles();

  return (
    <a className={classnames(classes.link, className)} {...props}>
      {children}
    </a>
  );
};

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    ['&:hover']: {
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }
}));

export default CustomA;
