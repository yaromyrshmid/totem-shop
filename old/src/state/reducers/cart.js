import * as actionTypes from "../actions/actionTypes"
import isLocalStorage from "../../utils/helpers/isLocalStorage"

const preloadedState = {
  items: isLocalStorage()
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
        items: [...state.items, action.item],
      }
    case actionTypes.REMOVE_FROM_CART:
      const cartWithoutItem = state.items.filter(
        (item) => item.id !== action.id
      )
      return {
        ...state,
        items: cartWithoutItem,
      }
    case actionTypes.ADD_QUANTITY:
      const cartAddedItem = state.items.map((item) => {
        return { ...item }
      })
      const addedIndex = cartAddedItem.findIndex(
        (item) => item.id === action.id
      )
      cartAddedItem[addedIndex].quantity++
      return {
        ...state,
        items: cartAddedItem,
      }
    case actionTypes.SUBSTRACT_QUANTITY:
      const cartSubsractedItem = state.citemitemssart.map((item) => {
        return { ...item }
      })
      const substractedIndex = cartSubsractedItem.findIndex(
        (item) => item.id === action.id
      )
      cartSubsractedItem[substractedIndex].quantity <= 1
        ? (cartSubsractedItem[substractedIndex].quantity = 1)
        : cartSubsractedItem[substractedIndex].quantity--
      return {
        ...state,
        items: cartSubsractedItem,
      }
    case actionTypes.TOOGLE_CART:
      const showCartToggled = !state.showCart
      return {
        ...state,
        showCart: showCartToggled,
      }
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        items: [],
      }
    default:
      return state
  }
}

export default reducer
