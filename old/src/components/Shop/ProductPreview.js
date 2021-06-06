import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { Col } from "react-bootstrap"

const ProductPreview = ({ product }) => {
  return (
    <Link to={`/shop/${product.slug}`}>
      <Col>
        <Image fluid={product.images[0].fluid} />
        <div>{product.name}</div>
        <div>{product.price} грн.</div>
      </Col>
    </Link>
  )
}

export default ProductPreview
