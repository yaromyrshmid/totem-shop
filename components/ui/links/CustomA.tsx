import React from 'react';
import { makeStyles } from '@material-ui/core';
import classnames from 'classnames';

interface CustomAProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

type Ref = HTMLAnchorElement;

const CustomA = React.forwardRef<Ref, CustomAProps>(
  ({ children, className, ...props }, ref): JSX.Element => {
    const classes = useStyles();

    return (
      <a className={classnames(classes.link, className)} {...props} ref={ref}>
        {children}
      </a>
    );
  }
);

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

CustomA.displayName = 'CustomA';

export default CustomA;
