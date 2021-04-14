import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"

// import Cart from "../Cart/Cart"
import LinkedLogo from "./Shared/LinkedLogo"
import NavItems from "./Shared/NavItems"

const Header = ({ pageTitle, openDrawer }) => {
  const classes = useStyles()

  return (
    <AppBar position="static">
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
  )
}

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}))

Header.propTypes = {
  pageTitle: PropTypes.string,
}

Header.defaultProps = {
  pageTitle: "Totem Shop",
}

export default Header
