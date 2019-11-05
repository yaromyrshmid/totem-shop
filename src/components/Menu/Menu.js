import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Row } from "react-bootstrap"

import MenuItem from "./MenuItem/MenuItem"

const getCategories = graphql`
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
  }
`

const Menu = () => {
  const categories = useStaticQuery(getCategories).categories.edges
  return (
    <>
      <Row>
        {categories.map(({ node }, index) => {
          const row = index < 3 || index > 4 ? "odd" : "even"
          return <MenuItem key={node.id} item={node} row={row} />
        })}
      </Row>
    </>
  )
}

export default Menu
