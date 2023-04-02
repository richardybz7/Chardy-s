import { all, call, put, takeLatest, select } from "@redux-saga/core/effects";
import { BASKET_ACTION_TYPES } from "./basket.types";
import { setTotalCountFailed, setTotalCountSuccess, updateSearchItemsAfterBasketUpdateFailed, updateSearchItemsAfterBasketUpdateSuccess } from "./basket.action";
import { selectBasketItems, selectSearchItems } from "./basket.selector";

export function* setTotalCount(){
  const selectBasket = yield select(selectBasketItems)
  try{
    yield put(setTotalCountSuccess(selectBasket))
  } catch (err) {
    yield put(setTotalCountFailed(err))
  }
}

export function* updateSearchItemsAfterBasketUpdateStart(){
  const basketItems = yield select(selectBasketItems)
  const searchItems = yield select(selectSearchItems)
  try{
    yield put(updateSearchItemsAfterBasketUpdateSuccess(basketItems, searchItems))
  } catch(err){
    yield put(updateSearchItemsAfterBasketUpdateFailed(err))
  }
}

export function* onSetTotalCountStart(){
  yield takeLatest(BASKET_ACTION_TYPES.SET_BASKET_TOTAL_START, setTotalCount)
}

export function* onUpdateSearchItemsAfterBasketUpdateStart(){
  yield takeLatest(BASKET_ACTION_TYPES.UPDATE_SEARCH_ITEMS_AFTER_BASKET_UPDATE_START, updateSearchItemsAfterBasketUpdateStart)
}

export function* basketSaga(){
  yield all([
    call(onSetTotalCountStart),
    call(onUpdateSearchItemsAfterBasketUpdateStart)
  ])
}