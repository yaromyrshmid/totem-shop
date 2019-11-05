const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      categories: allContentfulCategories {
        edges {
          node {
            slug
          }
        }
      }
      products: allContentfulProduct {
        edges {
          node {
            slug
            category {
              slug
            }
          }
        }
      }
    }
  `)
  data.categories.edges.forEach(({ node }) => {
    createPage({
      path: `shop/${node.slug}`,
      component: path.resolve("./src/templates/category-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.products.edges.forEach(({ node }) => {
    createPage({
      path: `shop/${node.slug}`,
      component: path.resolve("./src/templates/product-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
