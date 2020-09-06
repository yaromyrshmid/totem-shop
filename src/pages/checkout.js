import React, { useState } from "react"
import { connect } from "react-redux"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"
import CheckoutItem from "../components/Checkout/CheckoutItem"
import CheckoutForm from "../components/Checkout/CheckoutForm"
import * as actions from "../state/actions/cart"
import { Button } from "react-bootstrap"

const Checkout = (props) => {
  const [orderNumber, setOrderNumber] = useState(null)

  let totalPrice = 0
  props.cart.map((item) => {
    totalPrice += item.price * item.quantity
  })
  console.log(orderNumber)

  return (
    <Layout title="Checkout">
      <SEO title="Checkout" />
      {props.cart.length > 0 && (
        <div>
          <div>
            <CheckoutForm setOrderNumber={setOrderNumber} />
          </div>
          <div>
            {props.cart.map((item) => (
              <CheckoutItem key={`${item.id}-${item.color}`} item={item} />
            ))}
            <p>Загальна вартість: {totalPrice}</p>
            <Button onClick={props.toggleCart}>Змінити замовлення</Button>
          </div>
        </div>
      )}
      {orderNumber && (
        <div>
          <h6>
            Дякуюємо, замовлення успішне! Номер замовлення:{orderNumber}.
            Замовлення буде відправлено після отримання оплати. Реквізити: ...
            Вказуйте номер замовлення.
          </h6>
        </div>
      )}
      {props.cart.length === 0 && !orderNumber && (
        <div>
          <h6>У вас ще немає обраних товарів.</h6>
        </div>
      )}
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCart: () => dispatch(actions.toggleCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
