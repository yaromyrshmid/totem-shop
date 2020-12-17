import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import Shop from "../components/Shop/Shop"
import Home from "../components/Home/Home"

const IndexPage = () => (
  <Layout title="TotemNotes">
    <Home />
    <p>Фільтер з категоріями </p>
    <Shop />
  </Layout>
)

export default IndexPage
