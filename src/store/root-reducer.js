import { combineReducers } from "redux";
import { basketReducer } from "./basket/basket.reducer";
import { productsReducer } from "./products/products.reducer";
import { userReducer } from "./user/user.reducer";
import { purchasesReducer } from "./purchases/purchases.reducer";
import { burgerReducer } from "./burger/burger.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  basket: basketReducer,
  burger: burgerReducer,
  purchases: purchasesReducer
})