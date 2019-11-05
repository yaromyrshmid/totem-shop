import React from "react"
import { connect } from "react-redux"
import { Link } from "gatsby"
import Modal from "react-responsive-modal"
import styled from "styled-components"
import * as actions from "../../state/actions/cart"

import CartItem from "./CartItem"
import { Button } from "react-bootstrap"

const Cart = props => {
  console.log(props)
  let totalPrice = 0
  props.cart.map(item => {
    totalPrice = +item.price * item.quantity
  })
  return (
    <div>
      <div onClick={props.toggleCart}>
        <h2>cart {props.cart.length}</h2>
      </div>
      <Modal
        styles={{
          modal: {
            maxWidth: "1200px",
          },
        }}
        open={props.showCart}
        closeIconSize={10}
        onClose={props.toggleCart}
        closeOnOverlayClick
      >
        <CartContentWrapper>
          {props.cart.map(item => (
            <CartItem key={`${item.id}-${item.color}`} item={item} />
          ))}
          <p>Загальна вартість: {totalPrice}</p>
        </CartContentWrapper>
        <Button onClick={props.toggleCart}>Повернутись до покупок</Button>
        {props.cart.length > 0 && (
          <Link to="/checkout">
            <Button onClick={props.toggleCart}>Оформити замовлення</Button>
          </Link>
        )}
      </Modal>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    showCart: state.showCart,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCart: () => dispatch(actions.toggleCart()),
  }
}

const CartContentWrapper = styled.div``

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
