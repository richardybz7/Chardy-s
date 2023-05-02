import { createSelector } from "reselect"

export const selectProducts = (state) => state.products

export const selectProductsMap = createSelector([selectProducts], (products) => products.products)

export const selectProductReference = createSelector([selectProducts], (products) => products.ref)

export const selectProductTargetReference = createSelector([selectProducts], (products) => products.targetRef)

export const selectProductImages = createSelector([selectProducts], (products) => products.productImages)

export const selectProductLoading = createSelector([selectProducts], (products) => products.productsLoading)