import React from "react"
import PropTypes from "prop-types"
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import ProductItem from "../../Shop/ProductItem"
import Carousel from "../../ui/Carousel"

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
  const {
    breakpoints: { values: breakpoints },
  } = useTheme()

  const products = useStaticQuery(getFeaturedProducts).products.edges.map(
    ({ node }) => node
  )

  return (
    <>
      <Container>
        <Box mt={4}>
          <Typography variant="h4" component="h2">
            Новинки:
          </Typography>
        </Box>
      </Container>

      <Box>
        <Carousel
          slidesToScroll={1}
          slidesToShow={1}
          arrows={false}
          infinite={false}
          responsive={[
            {
              breakpoint: breakpoints.sm,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: breakpoints.lg,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 10000,
              settings: {
                slidesToShow: 3,
              },
            },
          ]}
        >
          {products.map((product) => (
            <ProductItem
              product={product}
              key={product.id}
              useNativeLinking
              containerClassName={classes.featuredItemContainer}
            />
          ))}
        </Carousel>
      </Box>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} lg={6} key={product.id}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  featuredItemContainer: {
    padding: theme.spacing(3),
  },
}))

FeaturedProducts.propTypes = {}

export default FeaturedProducts
