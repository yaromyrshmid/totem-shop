import React from "react"
import { Row, Col, Button } from "react-bootstrap"
import Image from "gatsby-image"
import { Link } from "gatsby"

const CheckoutItem = props => {
  const item = props.item
  return (
    <Row>
      <Col>
        <Image fluid={item.image.fluid} />
      </Col>
      <Col>
        <Link to={`/shop/${item.slug}`}>{item.name}</Link>
      </Col>
      <Col>{item.price}</Col>
      <Col>{item.color}</Col>
      <Col>{item.quantity}</Col>
      <Col>Загальна вартість:{item.price * item.quantity}</Col>
    </Row>
  )
}

export default CheckoutItem
