import { BASKET_ACTION_TYPES } from "./basket.types";

export const BASKET_INITIAL_STATE = {
  basketItems: {},
  searchItems: {},
  isBasketOpen: false,
  totalItems: 0,
  isLoading: false,
  error: null
}

export const basketReducer = (
  state = BASKET_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action

  switch(type) {
    case BASKET_ACTION_TYPES.UPDATE_SEARCH_ITEMS_AFTER_BASKET_UPDATE_START:
    case BASKET_ACTION_TYPES.SET_BASKET_TOTAL_START:
      return { ...state, isLoading: true }
    case BASKET_ACTION_TYPES.SET_BASKET_TOTAL_SUCCESS:
      return { ...state, totalItems: payload, isLoading: false }
    case BASKET_ACTION_TYPES.SET_BASKET:
      return {
        ...state,
        basketItems: payload,
        isLoading: false
      }
    case BASKET_ACTION_TYPES.UPDATE_SEARCH_ITEMS_AFTER_BASKET_UPDATE_SUCCESS:
    case BASKET_ACTION_TYPES.SET_SEARCH_ITEMS:
      return {
        ...state,
        searchItems: payload,
        isLoading: false
      }
    case BASKET_ACTION_TYPES.SET_IS_BASKET_OPEN:
      return {
        ...state,
        isBasketOpen: payload,
        isLoading: false
      }
    case BASKET_ACTION_TYPES.UPDATE_SEARCH_ITEMS_AFTER_BASKET_UPDATE_FAILED:
    case BASKET_ACTION_TYPES.SET_BASKET_TOTAL_FAILED:
      return { ...state, error: payload, isLoading: false }
    default:
      return state
  }
}