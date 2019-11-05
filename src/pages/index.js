import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSlider from "../components/Home/HeroSlider"
import Shop from "../components/Shop/Shop"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSlider />
    <p>Фільтер з категоріями </p>
    <Shop />
  </Layout>
)

export default IndexPage
