import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ShopComponent from "../components/Shop/Shop"

const Shop = () => {
  return (
    <Layout>
      <SEO title="Shop" />
      <ShopComponent />
    </Layout>
  )
}

export default Shop
