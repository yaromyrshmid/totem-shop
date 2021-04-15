import React, { useMemo } from "react"
import { useDispatch } from "react-redux"
import { Box, Button, makeStyles, Paper, Typography } from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"
import classnames from "classnames"

import { addToCart } from "../../state/actions/cart"
import CustomLink from "../ui/CustomLink"
import NativeLink from "../ui/NativeLink"

const ProductItem = ({
  product: {
    slug,
    mainImage: { fluid: mainImage },
    name,
    price,
    id,
  },
  useNativeLinking,
  containerClassName,
}) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleAddToCart = (e) => {
    e.preventDefault()
    dispatch(addToCart(id))
  }

  const LinkComponent = useMemo(
    () => (useNativeLinking ? NativeLink : CustomLink),
    [slug, useNativeLinking]
  )

  return (
    <Box className={classnames(classes.cardContainer, containerClassName)}>
      <LinkComponent to={`/shop/${slug}`}>
        <Paper className={classes.paper} component="article">
          <Box className={classes.imageContainer}>
            <BackgroundImage
              Tag="div"
              fluid={mainImage}
              className={classnames(classes.image, "product-item-image")}
            />
          </Box>

          <Box className={classes.content}>
            <Box className={classes.action}>
              <Typography variant="h4" component="h3" color="secondary">
                {name}
              </Typography>

              <Typography variant="h5" component="p">
                {price} грн.
              </Typography>
            </Box>

            <Button
              size="large"
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={handleAddToCart}
            >
              В кошик
            </Button>
          </Box>
        </Paper>
      </LinkComponent>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    width: "100%",
  },
  paper: {
    width: "100%",
    overflow: "hidden",
    height: 540,
    display: "flex",
    flexDirection: "column",
    transition: "box-shadow 600ms",
    "&:hover": {
      boxShadow: "0px 14px 32px 0px rgba(0, 0, 0, 0.45)",
    },
    ["& .product-item-image"]: {
      transition: "transform 600ms",
    },
    "&:hover .product-item-image": {
      transform: "scale(1.1)",
    },

    [theme.breakpoints.up("sm")]: {
      height: 320,
      flexDirection: "row",
    },
  },
  imageContainer: {
    height: "70%",
    width: "100%",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      height: "100%",
      width: "50%",
    },
  },
  image: {
    height: "100%",
    width: "100%",
    backgroundSize: "cover",
  },
  content: {
    height: "30%",
    width: "100%",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      height: "100%",
      width: "50%",
    },
  },
  action: {
    marginTop: "auto",
  },
  button: {
    alignSelf: "flex-end",
    marginTop: "auto",
  },
}))

export default ProductItem
