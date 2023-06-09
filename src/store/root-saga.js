import { all, call } from "@redux-saga/core/effects";
import { userSagas } from "./user/user.saga";
import { productsSaga } from "./products/products.saga";
import { basketSaga } from "./basket/basket.saga";
import { purchasesSaga } from "./purchases/purchases.saga";

export function* rootSaga(){
  yield all([
    call(userSagas),
    call(productsSaga),
    call(basketSaga),
    call(purchasesSaga)
  ])
}