import React from "react"
import CustomLink from "./CustomLink"

const NativeLink = ({ children, to, ...props }) => {
  return (
    <a href={to} {...props} style={{ textDecoration: "none" }}>
      {children}
    </a>
  )
}

NativeLink.propTypes = {}

export default NativeLink
