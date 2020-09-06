import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import Header from "./Header"
import Drawer from "./Drawer"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./Footer"

const Layout = ({ children, cart, title }) => {
  const [showDrawer, setShowDrawer] = useState(false)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const handleCloseDrawer = () => {
    setShowDrawer(false)
  }

  const handleOpenDrawer = () => {
    setShowDrawer(true)
  }

  return (
    <>
      <Header openDrawer={handleOpenDrawer} pageTitle={title} />
      <Drawer showDrawer={showDrawer} closeDrawer={handleCloseDrawer} />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Layout)
