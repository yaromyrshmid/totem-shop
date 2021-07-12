import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Menu } from '@material-ui/icons';

import LinkedLogo from './Shared/LinkedLogo';
import NavItems from './Shared/NavItems';
import CartHeaderIcon from 'components/cart/CartHeaderIcon';

interface HeaderProps {
  pageTitle?: string;
  onOpenDrawer: () => void;
  onOpenCart: () => void;
  hideNavigation?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  pageTitle,
  onOpenDrawer,
  onOpenCart,
  hideNavigation = false
}): JSX.Element => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <LinkedLogo />

        <Typography variant="h6" component="h1" className={classes.title}>
          {pageTitle}
        </Typography>

        {!hideNavigation && (
          <>
            <NavItems />

            <CartHeaderIcon onClick={onOpenCart} />

            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={onOpenDrawer}
            >
              <Menu />
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

export default Header;
