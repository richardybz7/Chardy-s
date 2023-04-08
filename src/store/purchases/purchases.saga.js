import { all, call, put, takeLatest, select } from "@redux-saga/core/effects"
import { PURCHASES_ACTION_TYPES } from "./purchases.types"
import { getUserPurchases, udpateUserPurchases } from "../../utils/firebase/firebase.utils"
import { selectCurrentUser } from "../user/user.selector"
import { udpatePurchasesSuccess, updatePurchasesFailed } from "./purchases.action"
import { selectBasketItems } from "../basket/basket.selector"

export function* udpatePurchases(){
  const currentUser = yield select(selectCurrentUser)
  const basketItems = yield select(selectBasketItems)
  try{
    yield call(udpateUserPurchases, currentUser, basketItems)
    const purchases = yield call(getUserPurchases, currentUser)
    yield put(udpatePurchasesSuccess(purchases))
  }catch(err){
    yield put(updatePurchasesFailed(err))
  }
}

export function* onUpdatePurchasesStart(){
  yield takeLatest(PURCHASES_ACTION_TYPES.UPDATE_PURCHASES_START, udpatePurchases)
}

export function* purchasesSaga (){
  yield all([
    call(onUpdatePurchasesStart)
  ])
}