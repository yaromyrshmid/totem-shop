import React from "react"
import { Link } from "gatsby"
import { Box, makeStyles, Typography } from "@material-ui/core"
import classnames from "classnames"

const NavItems = ({ inDrawer }) => {
  const classes = useStyles()

  return (
    <Box
      className={classnames(
        classes.container,
        inDrawer && classes.containerInDrawer
      )}
    >
      <Link
        to="/shop"
        activeClassName={classes.activeItem}
        className={classnames(classes.item, inDrawer && classes.itemInDrawer)}
      >
        <Typography variant={inDrawer ? "h5" : "h6"}>Магазин</Typography>
      </Link>

      <Link
        to="/about-us"
        activeClassName={classes.activeItem}
        className={classnames(classes.item, inDrawer && classes.itemInDrawer)}
      >
        <Typography variant={inDrawer ? "h5" : "h6"}>Про нас</Typography>
      </Link>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "none",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  item: {
    textDecoration: "none",
    color: theme.palette.text.primary,
    marginRight: theme.spacing(4),
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary.main,
    },
  },
  activeItem: {
    color: theme.palette.primary.main,
  },
  containerInDrawer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  itemInDrawer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

export default NavItems
