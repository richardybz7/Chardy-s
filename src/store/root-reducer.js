import { combineReducers } from "redux";
import { basketReducer } from "./basket/basket.reducer";
import { productsReducer } from "./products/products.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  basket: basketReducer
})