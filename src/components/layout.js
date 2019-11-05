import React, { useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { connect } from "react-redux"

import Header from "./header"
import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"

const Layout = ({ children, cart }) => {
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])
  return (
    <>
      <Header />
      {children}
      <footer>
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Layout)
