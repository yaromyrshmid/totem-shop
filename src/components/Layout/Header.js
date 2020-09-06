import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import MenuIcon from "@material-ui/icons/Menu"
import IconButton from "@material-ui/core/IconButton"

import Cart from "../Cart/Cart"

const Header = ({ pageTitle, openDrawer }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={openDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Link to="/">Logo</Link>

          <Typography variant="h6" className={classes.title}>
            {pageTitle}
          </Typography>

          <Typography variant="h6">
            <Link to="/shop">Shop</Link>
          </Typography>

          <Typography variant="h6">
            <Link to="/contacts">Contacts</Link>
          </Typography>

          <Cart />
        </Toolbar>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
