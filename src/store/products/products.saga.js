import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { getProductsFailed, getProductsSuccess } from "./products.action";
import { PRODUCTS_ACTION_TYPES } from "./products.types";

export function* getProducts(){
  try{
    const products = yield call(getCategoriesAndDocuments)
    yield put(getProductsSuccess(products))
  }catch(err){
    yield put(getProductsFailed(err))
  }
}

export function* onGetProducts(){
  yield takeLatest(PRODUCTS_ACTION_TYPES.GET_PRODUCTS_START, getProducts)
}

export function* productsSaga() {
  yield all([
    call(onGetProducts)
  ])
}