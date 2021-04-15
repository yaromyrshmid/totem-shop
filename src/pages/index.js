import React from "react"

import Layout from "../components/Layout/Layout"
import Shop from "../components/Shop/Shop"
import Home from "../components/Home/Home"

const IndexPage = () => (
  <Layout title="Totemnotes">
    <Home />

    <Shop />
  </Layout>
)

export default IndexPage
