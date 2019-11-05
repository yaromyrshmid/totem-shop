import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProductPreview from "./ProductPreview"
import { Container, Row } from "react-bootstrap"

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
          images {
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

  return (
    <Container>
      <Row>
        {data.products.edges.map(({ node }) => (
          <ProductPreview key={node.id} product={node} />
        ))}
      </Row>
    </Container>
  )
}

export default Shop
