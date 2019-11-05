import React from "react"
import { connect } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CheckoutItem from "../components/Checkout/CheckoutItem"
import * as actions from "../state/actions/cart"
import { Button } from "react-bootstrap"

const checkout = props => {
  let totalPrice = 0
  props.cart.map(item => {
    totalPrice += item.price * item.quantity
  })
  return (
    <Layout>
      <SEO title="Checkout" />
      <div>
        Доставка та оплата замовлення: форма: ім*я та прізвище телефон чек-бокс
        передзвонити для уточнення замовлення електронна адреса коментар
        Доставка радіал вибір з 1 пунктом - Доставка по Україні "Новою поштою"
        за тарифами Нової пошти 3 поля з вибором області, міста, відділення
        Оплата радіал вибір з 1 пунктом: На картку Приват Банку Реквізити ...
      </div>
      <div>
        {props.cart.map(item => (
          <CheckoutItem key={`${item.id}-${item.color}`} item={item} />
        ))}
        <p>Загальна вартість: {totalPrice}</p>
        <Button onClick={props.toggleCart}>Змінити замовлення</Button>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCart: () => dispatch(actions.toggleCart()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(checkout)
