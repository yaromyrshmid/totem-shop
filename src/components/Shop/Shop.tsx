import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Container } from "@material-ui/core"

import ProductItem from "./ProductItem"
import FilterPanel from "./components/FilterPanel"
import { ICategory, ICategoryNode } from "../../types/Category"

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
    products: allContentfulProduct(sort: { fields: updatedAt, order: DESC }) {
      edges {
        node {
          category {
            category
            id
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

interface ShopData {
  products: { edges: Array<any> }
  categories: { edges: Array<ICategoryNode> }
}

const Shop = () => {
  const {
    categories: { edges: categoriesEdges },
    products: { edges: products },
  }: ShopData = useStaticQuery(getData)
  const categories: Array<ICategory> = categoriesEdges.map(({ node }) => node)

  console.log(products, categories)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedCategory, setSelectedCategory] = useState("")

  const handleCategorySelect = (categoryId: string) => {
    console.log(categoryId)
    if (categoryId) {
      setFilteredProducts(
        products.filter(
          ({
            node: {
              category: { id },
            },
          }) => id === categoryId
        )
      )
    } else {
      setFilteredProducts(products)
    }
    setSelectedCategory(categoryId)
  }

  return (
    <Container>
      <FilterPanel
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />

      <Grid container spacing={6}>
        {filteredProducts.map(({ node }) => (
          <Grid xs={12} sm={6} lg={4} item key={node.id}>
            <ProductItem product={node} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Shop
