import { PRODUCTS_ACTION_TYPES } from "./products.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const addProductImages = (images, products) => {
  for(let category in products){
    for(let i = 0; i < products[category].length; i++){
      let substring = `id_${products[category][i].id}.png`
      for(let url in images){
        if(images[url].includes(substring)){
          products[category][i].imageUrl = images[url]
        }
      }
    }
  }
  return products
}

export const getProductsStart = () => 
  createAction(PRODUCTS_ACTION_TYPES.GET_PRODUCTS_START)
export const getProductsSuccess = (productsMap) => 
  createAction(PRODUCTS_ACTION_TYPES.GET_PRODUCTS_SUCCESS, productsMap)
export const getProductsFailed = (error) =>
  createAction(PRODUCTS_ACTION_TYPES.GET_PRODUCTS_FAILED, error)
export const setProductTargetReference = (referenceNum) =>
  createAction(PRODUCTS_ACTION_TYPES.SET_PRODUCT_TARGET_REF, referenceNum)
export const getProductImagesStart = () => 
  createAction(PRODUCTS_ACTION_TYPES.GET_PRODUCT_IMAGES_START)
export const getProductImagesSuccess = (images) => 
  createAction(PRODUCTS_ACTION_TYPES.GET_PRODUCT_IMAGES_SUCCESS, images)
export const getProductImagesFailed = (error) => 
  createAction(PRODUCTS_ACTION_TYPES.GET_PRODUCT_IMAGES_FAILED, error)
export const addImagesToProducts = (images, products) => {
  const productsWithImages = addProductImages(images, products)
  return createAction(PRODUCTS_ACTION_TYPES.SET_PRODUCT_IMAGES, productsWithImages)
}