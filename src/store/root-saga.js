import { all, call } from "@redux-saga/core/effects";
import { userSagas } from "./user/user.saga";
import { productsSaga } from "./products/products.saga";

export function* rootSaga(){
  yield all([
    call(userSagas),
    call(productsSaga)
  ])
}