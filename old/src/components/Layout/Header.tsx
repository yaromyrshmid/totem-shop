import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

// import Cart from "../Cart/Cart"
import LinkedLogo from './Shared/LinkedLogo';
import NavItems from './Shared/NavItems';

interface HeaderProps {
  pageTitle?: string;
  openDrawer: () => void;
}

const Header: React.FC<HeaderProps> = ({ pageTitle, openDrawer }: HeaderProps): JSX.Element => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <LinkedLogo />

        <Typography variant="h6" component="h1" className={classes.title}>
          {pageTitle}
        </Typography>

        <NavItems />

        {/* <Cart /> */}

        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={openDrawer}
        >
          <MenuIcon />
        </IconButton>
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
