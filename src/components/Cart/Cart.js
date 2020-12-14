import React, { useEffect } from "react"
import { connect } from "react-redux"
import { Link } from "gatsby"
import Modal from "react-responsive-modal"
import styled from "styled-components"
import * as actions from "../../state/actions/cart"

import CartItem from "./CartItem"
import { Button } from "react-bootstrap"
import CartHeaderButton from "./CartHeaderButton"

const Cart = (props) => {
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(props.cart))
  }, [props.cart])

  let totalPrice = 0
  props.cart.map((item) => {
    totalPrice = +item.price * item.quantity
  })

  return (
    <div>
      <CartHeaderButton
        onClick={props.toggleCart}
        itemCount={props.cart?.length}
      />

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
          {props.cart.map((item) => (
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

const mapStateToProps = (state) => {
  console.log(state)
  return {
    cart: state.cart.items,
    showCart: state.cart.showCart,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCart: () => dispatch(actions.toggleCart()),
  }
}

const CartContentWrapper = styled.div``

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
