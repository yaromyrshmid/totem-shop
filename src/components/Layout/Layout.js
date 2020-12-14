import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import Header from "./Header"
import Drawer from "./Drawer"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./Footer"
import { useMediaQuery, useTheme } from "@material-ui/core"

const Layout = ({ children, cart, title }) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"))

  const [showDrawer, setShowDrawer] = useState(false)

  useEffect(() => {
    if (isDesktop) {
      setShowDrawer(false)
    }
  }, [isDesktop])

  const handleCloseDrawer = () => {
    setShowDrawer(false)
  }

  const handleOpenDrawer = () => {
    setShowDrawer(true)
  }

  return (
    <>
      <Header openDrawer={handleOpenDrawer} pageTitle={title} />

      {!isDesktop && (
        <Drawer showDrawer={showDrawer} closeDrawer={handleCloseDrawer} />
      )}

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
    cart: state.cart.items,
  }
}

export default connect(mapStateToProps)(Layout)
