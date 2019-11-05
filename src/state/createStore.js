import { createStore } from "redux"
import * as actionTypes from "./actions/actionTypes"

const isStorage = () => {
  try {
    const key = "random_key_you_are_not_going_to_use"
    localStorage.setItem(key, key)
    localStorage.removeItem(key)
    return true
  } catch (e) {
    return false
  }
}

const preloadedState = {
  cart: isStorage()
    ? localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : []
    : [],
  showCart: false,
}

const reducer = (state = preloadedState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.item],
      }
    case actionTypes.REMOVE_FROM_CART:
      const cartWithoutItem = state.cart.filter(item => item.id !== action.id)
      return {
        ...state,
        cart: cartWithoutItem,
      }
    case actionTypes.ADD_QUANTITY:
      const cartAddedItem = state.cart.map(item => {
        return { ...item }
      })
      const addedIndex = cartAddedItem.findIndex(item => item.id === action.id)
      cartAddedItem[addedIndex].quantity++
      return {
        ...state,
        cart: cartAddedItem,
      }
    case actionTypes.SUBSTRACT_QUANTITY:
      const cartSubsractedItem = state.cart.map(item => {
        return { ...item }
      })
      const substractedIndex = cartSubsractedItem.findIndex(
        item => item.id === action.id
      )
      cartSubsractedItem[substractedIndex].quantity <= 1
        ? (cartSubsractedItem[substractedIndex].quantity = 1)
        : cartSubsractedItem[substractedIndex].quantity--
      return {
        ...state,
        cart: cartSubsractedItem,
      }
    case actionTypes.TOOGLE_CART:
      const showCartToggled = !state.showCart
      return {
        ...state,
        showCart: showCartToggled,
      }
    default:
      return state
  }
}

const store = preloadedState => {
  return createStore(reducer, preloadedState)
}

export default store
