import React, { useCallback } from 'react';
import Link from 'next/link';
import { Box, makeStyles, Typography } from '@material-ui/core';
import classnames from 'classnames';
import { useRouter } from 'next/router';

interface NavItemsProps {
  inDrawer?: boolean;
}

const navLinks = [
  {
    href: '/shop',
    title: 'Магазин'
  },
  {
    href: '/about-us',
    title: 'Про нас'
  }
];

const NavItems: React.FC<NavItemsProps> = ({ inDrawer }: NavItemsProps): JSX.Element => {
  const classes = useStyles();
  const { pathname } = useRouter();

  const isActive = useCallback((href) => href === pathname, [pathname]);

  return (
    <Box className={classnames(classes.container, inDrawer && classes.containerInDrawer)}>
      {navLinks.map(({ href, title }) => (
        <Link href={href} key={href}>
          <a
            className={classnames(
              classes.item,
              inDrawer && classes.itemInDrawer,
              isActive(href) && classes.activeItem
            )}
          >
            <Typography variant={inDrawer ? 'h5' : 'h6'}>{title}</Typography>
          </a>
        </Link>
      ))}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'none',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  item: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    marginRight: theme.spacing(4),
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.primary.main
    }
  },
  activeItem: {
    color: theme.palette.primary.main
  },
  containerInDrawer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  itemInDrawer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

export default NavItems;
