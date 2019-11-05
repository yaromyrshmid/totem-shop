import React from "react"
import { Link } from "gatsby"
import { connect } from "react-redux"
import { Row, Col, Button } from "react-bootstrap"
import Image from "gatsby-image"

import * as actions from "../../state/actions/cart"

const CartItem = props => {
  const item = props.item
  return (
    <Row>
      <Col>
        <Image fluid={item.image.fluid} />
      </Col>
      <Col>
        <Link to={`/shop/${item.slug}`}>
          <h5 onClick={props.toggleCart}>{item.name}</h5>
        </Link>
      </Col>
      <Col>{item.price}</Col>
      <Col>{item.color}</Col>
      <Col>
        <Button onClick={() => props.substractQuantity(item.id)}>-</Button>
        {item.quantity}
        <Button onClick={() => props.addQuantity(item.id)}>+</Button>
      </Col>
      <Col>Загальна вартість:{item.price * item.quantity}</Col>
      <Col>
        <Button onClick={() => props.removeFromCart(item.id)}>x</Button>
      </Col>
    </Row>
  )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: id => dispatch(actions.removeFromCart(id)),
    addQuantity: id => dispatch(actions.addQuantity(id)),
    substractQuantity: id => dispatch(actions.substractQuantity(id)),
    toggleCart: () => dispatch(actions.toggleCart()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem)
