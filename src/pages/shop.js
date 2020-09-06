import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import ShopComponent from "../components/Shop/Shop"

const Shop = () => {
  return (
    <Layout title="Shop">
      <SEO title="Shop" />
      <ShopComponent />
    </Layout>
  )
}

export default Shop
