import { BASKET_ACTION_TYPES } from "./basket.types";

export const BASKET_INITIAL_STATE = {
  basketItems: [],
  isBasketOpen: false,
  totalItems: 0,
}

export const basketReducer = (
  state = BASKET_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action
  switch(type) {
    case BASKET_ACTION_TYPES.SET_BASKET_ITEM:
      return {
        ...state,
        basketItems: payload
      }
    case BASKET_ACTION_TYPES.SET_IS_BASKET_OPEN:
      return {
        ...state,
        isBasketOpen: payload
      }
    default:
      return state
  }
}