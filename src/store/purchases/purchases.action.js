import { PURCHASES_ACTION_TYPES } from "./purchases.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const numOfPurchasesNotification = (purchases) => {
  let purchaseCount = 0
  purchases.forEach((purchase) => {
    Object.values(purchase).forEach((item) =>
    item.notify && purchaseCount++
    )
  })
  return purchaseCount
}
export const setPurchases = (purchases) => 
  createAction(PURCHASES_ACTION_TYPES.SET_PURCHASES, purchases.reverse())

export const setPurchasesNotification = (purchases) => {
  const numOfNotification = numOfPurchasesNotification(purchases)
  return createAction(PURCHASES_ACTION_TYPES.SET_NOTIFICATION_PURCHASES, numOfNotification)
}
export const setPurchasesNotificationToZero = () =>
  createAction(PURCHASES_ACTION_TYPES.SET_NOTIFICATION_PURCHASES, 0)
export const udpatePurchasesStart = () =>
  createAction(PURCHASES_ACTION_TYPES.UPDATE_PURCHASES_START)

export const udpatePurchasesSuccess = (purchases) =>
  createAction(PURCHASES_ACTION_TYPES.UPDATE_PURCHASES_SUCCESS, purchases.reverse())

export const updatePurchasesFailed = (error) =>
  createAction(PURCHASES_ACTION_TYPES.UPDATE_PURCHASES_FAILED, error)