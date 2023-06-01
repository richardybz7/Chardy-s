import { all, call, put, takeLatest, select } from "@redux-saga/core/effects";
import { getCategoriesAndDocuments, getImages } from "../../utils/firebase/firebase.utils";
import { getProductImagesFailed, getProductImagesSuccess, getProductsFailed, getProductsSuccess } from "./products.action";
import { PRODUCTS_ACTION_TYPES } from "./products.types";

export function* getProducts(){
  try{
    const products = yield call(getCategoriesAndDocuments)
    yield put(getProductsSuccess(products))
  }catch(err){
    yield put(getProductsFailed(err))
  }
}

export function* getProductImages() {
  try{
    const imagesPromise = yield getImages()
    yield put(getProductImagesSuccess(imagesPromise))
  }
  catch(err){
    yield put(getProductImagesFailed(err))
  }
}

export function* onGetProductImages(){
  yield takeLatest(PRODUCTS_ACTION_TYPES.GET_PRODUCT_IMAGES_START, getProductImages)
}

export function* onGetProducts(){
  yield takeLatest(PRODUCTS_ACTION_TYPES.GET_PRODUCTS_START, getProducts)
}

export function* productsSaga() {
  yield all([
    call(onGetProducts),
    call(onGetProductImages)
  ])
}