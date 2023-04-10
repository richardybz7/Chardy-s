import { PURCHASES_ACTION_TYPES } from "./purchases.types";

export const INITIAL_PURCHASES_STATE = {
  purchases: {},
  numOfNotification: 0,
  loadingPurchases: false,
  error: null
}

export const purchasesReducer = (
  state = INITIAL_PURCHASES_STATE,
  action = {}
) => {
  const { type, payload } = action
  switch(type){
    case PURCHASES_ACTION_TYPES.UPDATE_PURCHASES_START:
      return { ...state, loadingPurchases: true }
    case PURCHASES_ACTION_TYPES.UPDATE_PURCHASES_SUCCESS:
    case PURCHASES_ACTION_TYPES.SET_PURCHASES:
      return { ...state, loadingPurchases: false, purchases: payload }
    case PURCHASES_ACTION_TYPES.SET_NOTIFICATION_PURCHASES:
      return { ...state, loadingPurchases: false, numOfNotification: payload }
    case PURCHASES_ACTION_TYPES.UPDATE_PURCHASES_FAILED:
      return { ...state, loadingPurchases: false, purchases: payload }
    default:
      return state
  }
}