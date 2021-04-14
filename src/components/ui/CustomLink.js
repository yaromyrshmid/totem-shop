import React from "react"
import { Link } from "gatsby"

const CustomLink = ({ children, ...props }) => {
  return (
    <Link {...props} style={{ textDecoration: "none" }}>
      {children}
    </Link>
  )
}

CustomLink.propTypes = {}

export default CustomLink
