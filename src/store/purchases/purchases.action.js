import { PURCHASES_ACTION_TYPES } from "./purchases.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setPurchases = (purchases) =>
  createAction(PURCHASES_ACTION_TYPES.SET_PURCHASES, purchases)

export const udpatePurchasesStart = () =>
  createAction(PURCHASES_ACTION_TYPES.UPDATE_PURCHASES_START)

export const udpatePurchasesSuccess = (purchases) =>
  createAction(PURCHASES_ACTION_TYPES.UPDATE_PURCHASES_SUCCESS, purchases)

export const updatePurchasesFailed = (error) =>
  createAction(PURCHASES_ACTION_TYPES.UPDATE_PURCHASES_FAILED, error)