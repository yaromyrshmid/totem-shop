import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProductPreview from "./ProductPreview"
import { Grid, Container } from "@material-ui/core"
import ProductItem from "./ProductItem"

const getData = graphql`
  query {
    categories: allContentfulCategories(
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          category
          slug
          id
          image {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    products: allContentfulProduct(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          category {
            category
          }
          slug
          id
          name
          price
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

const Shop = () => {
  const data = useStaticQuery(getData)
  console.log(data)

  return (
    <Container>
      <Grid container>
        {data?.products?.edges?.map(({ node }) => (
          <Grid item key={node.id}>
            {/* <ProductItem product={node} /> */}
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Shop
