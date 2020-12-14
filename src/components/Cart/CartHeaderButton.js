import React from "react"
import { Box, IconButton, makeStyles, Typography } from "@material-ui/core"
import ShoppingBasket from "@material-ui/icons/ShoppingBasket"

const CartHeaderButton = ({ onClick }) => {
  const classes = useStyles()
  const itemCount = 5
  return (
    <IconButton
      aria-label="open drawer"
      onClick={onClick}
      className={classes.button}
    >
      <ShoppingBasket />

      {!!itemCount && (
        <Box className={classes.countContainer}>
          <Typography variant="caption" component="span">
            {itemCount}
          </Typography>
        </Box>
      )}
    </IconButton>
  )
}

const useStyles = makeStyles((theme) => ({
  button: {
    position: "relative",
    color: theme.palette.common.white,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  countContainer: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(0.1),
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 18,
    width: 18,
    borderRadius: 9,
    color: theme.palette.common.white,
  },
}))

export default CartHeaderButton
