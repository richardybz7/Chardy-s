import { PRODUCTS_ACTION_TYPES } from "./products.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setProductsMap = (productsMap) => createAction(PRODUCTS_ACTION_TYPES.SET_PRODUCTS_MAP, productsMap)