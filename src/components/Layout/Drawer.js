import React from "react"
import { Link } from "gatsby"
import Drawer from "@material-ui/core/Drawer"
import {
  IconButton,
  makeStyles,
  Box,
  Typography,
  useTheme,
} from "@material-ui/core"
import { CloseOutlined } from "@material-ui/icons"
import LinkedLogo from "./Shared/LinkedLogo"
import NavItems from "./Shared/NavItems"
import CartHeaderButton from "../Cart/CartHeaderButton"
import { useDispatch } from "react-redux"
import { toggleCart } from "../../state/actions/cart"

const StyledDrawer = ({ showDrawer, closeDrawer }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleOpenCart = () => {
    closeDrawer()
    dispatch(toggleCart)
  }

  return (
    <Drawer
      anchor="left"
      open={showDrawer}
      onClose={closeDrawer}
      classes={{ paper: classes.drawerContent }}
    >
      <IconButton
        aria-label="close drawer"
        onClick={closeDrawer}
        className={classes.closeButton}
      >
        <CloseOutlined />
      </IconButton>

      <Box display="flex" alignItems="center">
        <LinkedLogo />

        <Typography variant="h5" component="h1" className={classes.title}>
          TotemNotes
        </Typography>
      </Box>

      <NavItems inDrawer />

      <CartHeaderButton onClick={handleOpenCart} />
    </Drawer>
  )
}

const useStyles = makeStyles((theme) => ({
  drawerContent: {
    position: "relative",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color: "white",
    alignItems: "flex-start",
  },
  closeButton: {
    position: "absolute",
    color: theme.palette.common.white,
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  title: {
    color: theme.palette.common.white,
  },
}))

export default StyledDrawer
