import { createSelector } from "reselect"

export const selectPurchasesState = (state) => state.purchases

export const selectPurchases = createSelector([selectPurchasesState],
  (purchases) => purchases.purchases  
)

export const selectNotificationCount = createSelector([selectPurchasesState],
  (purchases) => purchases.numOfNotification
)