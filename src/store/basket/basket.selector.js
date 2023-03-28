import { createSelector } from 'reselect'

const selectBasketReducer = state => state.basket

export const selectIsCartOpen = createSelector([selectBasketReducer], (basket) => basket.isBasketOpen)

export const selectBasketItems = createSelector([selectBasketReducer], (basket) => basket.basketItems)

export const selectTotalProductCount = createSelector([selectBasketItems], (basketItems) => basketItems.reduce((total, basketItem) => total + basketItem.count, 0))