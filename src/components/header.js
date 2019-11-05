import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Cart from "./Cart/Cart"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Totem shop
        </Link>
      </h1>
      <h2>
        <Link to="/shop">Shop</Link>
      </h2>
      <h2>
        <Link to="/contacts">Contacts</Link>
      </h2>
      <Cart />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
