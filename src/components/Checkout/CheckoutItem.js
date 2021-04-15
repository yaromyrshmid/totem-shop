import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { Grid } from "@material-ui/core"

const CheckoutItem = (props) => {
  const item = props.item
  return (
    <Grid container>
      <Grid item>
        <Image fluid={item.image.fluid} />
      </Grid>
      <Grid item>
        <Link to={`/shop/${item.slug}`}>{item.name}</Link>
      </Grid>
      <Grid item>{item.price}</Grid>
      <Grid item>{item.Gridor}</Grid>
      <Grid item>{item.quantity}</Grid>
      <Grid item>Загальна вартість:{item.price * item.quantity}</Grid>
    </Grid>
  )
}

export default CheckoutItem
