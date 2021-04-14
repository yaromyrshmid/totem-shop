import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core"

const CustomLink = ({ children, ...props }) => {
  const classes = useStyles()

  return (
    <Link className={classes.link} {...props}>
      {children}
    </Link>
  )
}

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}))

CustomLink.propTypes = {}

export default CustomLink
