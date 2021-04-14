import React from "react"
import PropTypes from "prop-types"
import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import ProductItem from "../../Shop/ProductItem"

const getFeaturedProducts = graphql`
  query {
    products: allContentfulProduct(
      filter: { featured: { eq: true }, available: { eq: true } }
      sort: { fields: updatedAt, order: DESC }
    ) {
      edges {
        node {
          id
          name
          price
          slug
          mainImage {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const FeaturedProducts = ({}) => {
  const classes = useStyles()

  const products = useStaticQuery(getFeaturedProducts).products.edges.map(
    ({ node }) => node
  )

  return (
    <Container className={classes.container} component="section">
      <Box mb={2}>
        <Typography variant="h4" component="h2">
          Новинки:
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} lg={6} key={product.id}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
}))

FeaturedProducts.propTypes = {}

export default FeaturedProducts
