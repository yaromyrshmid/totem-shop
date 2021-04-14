import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import { Box, makeStyles, Typography } from "@material-ui/core"
import classnames from "classnames"
import CustomLink from "../../ui/CustomLink"

const TextContent = ({ title, subtitle }) => (
  <>
    <Typography variant="h2" component="h1" color="secondary">
      {title}
    </Typography>

    <Typography variant="h3" component="h2" color="primary">
      {subtitle}
    </Typography>
  </>
)

const ItemContent = ({ title, subtitle, link, textAlign }) => {
  const classes = useStyles()

  if (link) {
    return (
      <Box
        className={classnames(classes.content, classes.linkedContent)}
        style={{ textAlign }}
      >
        <CustomLink to={link} className={classes.linkedContent}>
          <TextContent title={title} subtitle={subtitle} />
        </CustomLink>
      </Box>
    )
  }

  return (
    <Box className={classnames(classes.content)} style={{ textAlign }}>
      <TextContent title={title} subtitle={subtitle} />
    </Box>
  )
}

const HeroSliderItem = ({
  item: { id, image, title, subtitle, position, link, textAlign },
}) => {
  const classes = useStyles()

  return (
    <BackgroundImage
      Tag={"article"}
      id={id}
      fluid={image.fluid}
      className={classes.image}
    >
      <Box
        className={classnames(
          classes.contentContainer,
          position && classes[position]
        )}
      >
        <ItemContent
          title={title}
          subtitle={subtitle}
          link={link}
          textAlign={textAlign}
        />
      </Box>
    </BackgroundImage>
  )
}

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: "70vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: theme.palette.primary.main,
  },
  contentContainer: {
    height: "70vh",
    display: "flex",
    alignItems: "flex-start",
    padding: theme.spacing(2),
  },
  content: {
    textAlign: "initial",
    padding: theme.spacing(2),
  },
  linkedContent: {
    "&:hover": {
      opacity: 0.7,
      transition: "opacity 300ms",
      textDecoration: "none",
    },
  },
  ["center"]: {
    alignItems: "center",
    justifyContent: "center",
  },
  ["top-right"]: {
    justifyContent: "flex-end",
  },
  ["bottom-left"]: {
    alignItems: "flex-end",
  },
  ["bottom-right"]: {
    alignItems: "flex-end",
    justifyContent: "flext-end",
  },
}))

HeroSliderItem.propTypes = {}

export default HeroSliderItem
