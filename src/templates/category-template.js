import React from "react"
import { graphql } from "gatsby"
import { Row } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductPreview from "../components/Shop/ProductPreview"
import Title from "../components//UI/Title"

const Category = ({ data }) => {
  return (
    <Layout>
      <SEO title="" />
      <Title title={data.category.category} />
      <Row>
        {data.products.edges.map(({ node }) => {
          return <ProductPreview key={node.id} product={node} />
        })}
      </Row>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    category: contentfulCategories(slug: { eq: $slug }) {
      category
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    products: allContentfulProduct(
      filter: { category: { slug: { eq: $slug } } }
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          id
          slug
          name
          price
          colors
          category {
            slug
          }
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default Category
