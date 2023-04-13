import { PRODUCTS_ACTION_TYPES } from "./products.types";

export const PRODUCTS_INITIAL_STATE = {
  products: {},
  productsLoading: false,
  targetRef: null,
  error: null
}

export const productsReducer = (
  state = PRODUCTS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action
  switch(type) {
    case PRODUCTS_ACTION_TYPES.GET_PRODUCTS_START:
      return { ...state, productsLoading: true }
    case PRODUCTS_ACTION_TYPES.GET_PRODUCTS_SUCCESS:
      return { ...state, productsLoading: false, products: payload }
    case PRODUCTS_ACTION_TYPES.SET_PRODUCT_TARGET_REF:
      return { ...state, targetRef: payload }
    default:
      return state
  }
}