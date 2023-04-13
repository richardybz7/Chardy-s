import { PRODUCTS_ACTION_TYPES } from "./products.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const getProductsStart = () => 
  createAction(PRODUCTS_ACTION_TYPES.GET_PRODUCTS_START)
export const getProductsSuccess = (productsMap) => 
  createAction(PRODUCTS_ACTION_TYPES.GET_PRODUCTS_SUCCESS, productsMap)
export const getProductsFailed = (error) =>
  createAction(PRODUCTS_ACTION_TYPES.GET_PRODUCTS_FAILED, error)
export const setProductTargetReference = (referenceNum) =>
  createAction(PRODUCTS_ACTION_TYPES.SET_PRODUCT_TARGET_REF, referenceNum)