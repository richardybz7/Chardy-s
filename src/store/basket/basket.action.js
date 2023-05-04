import { BASKET_ACTION_TYPES } from "./basket.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const existingBasketItem = (basketItems, itemToFind) => {
  return basketItems.find((basketItem) => basketItem.id === itemToFind.id)
}

const addItemToBasket = (basketItems, itemToAdd, isDozen) => {
  if(!basketItems){
    if (isDozen) {
      return [{ ...itemToAdd, count: 0, dozenCount: 1}]
    }
    else{
      return [{ ...itemToAdd, count: 1, dozenCount: 0}]
    }
  }

  if(existingBasketItem(basketItems, itemToAdd)){
    if (isDozen) {
      return basketItems.map((basketItem) => basketItem.id === itemToAdd.id ? { ...basketItem, dozenCount: basketItem.dozenCount + 1 } : basketItem)
    }
    else{
      return basketItems.map((basketItem) => basketItem.id === itemToAdd.id ? { ...basketItem, count: basketItem.count + 1 } : basketItem)
    }
  }
  
  if (isDozen) {
    return [{ ...itemToAdd, count: 0, dozenCount: 1}, ...basketItems]
  }
  else{
    return [{ ...itemToAdd, count: 1, dozenCount: 0}, ...basketItems]
  }
}

const subtractItemFromBasket = (basketItems, itemToSubtract, isDozen) => {
  if (isDozen) {
    return basketItems.map((basketItem) => basketItem.id === itemToSubtract.id ? { ...basketItem, dozenCount: basketItem.dozenCount - 1 } : basketItem)
  }
  else{
    return basketItems.map((basketItem) => basketItem.id === itemToSubtract.id ? { ...basketItem, count: basketItem.count - 1 } : basketItem)
  }
}

const removeItemFromBasket = (basketItems, itemToRemove) => {
  return basketItems.filter((item) => item.id !== itemToRemove.id)
}

const setTotalProductCount = (basketItems) => {
  return basketItems.reduce((total, basketItem) => total + basketItem.count + basketItem.dozenCount, 0)
}

const updateItemCount = (basketItems, item, newCount, isPerPiece) => {
  if(!newCount) newCount = 0
  if(isPerPiece) {
    return basketItems.map((basketItem) => 
      basketItem.id === item.id ? { ...basketItem, count: newCount } : basketItem
    )
  }
  else{
    return basketItems.map((basketItem) => 
      basketItem.id === item.id ? { ...basketItem, dozenCount: newCount } : basketItem
    )
  }
}

const searchItemsUpdateAfterBasketUpdate = (basketItems, searchItems) => 
  basketItems.filter((basketItem) => searchItems.some((searchItem) => searchItem.id === basketItem.id))

const removePieces = (basketItems, piecesToRemove) => 
  basketItems.map((basketItem) => basketItem.id === piecesToRemove.id ? { ...basketItem, count: 0 } : basketItem )

const removeDozens = (basketItems, dozensToRemove) => 
  basketItems.map((basketItem) => basketItem.id === dozensToRemove.id ? { ...basketItem, dozenCount: 0 } : basketItem )

export const setBasketItems = (basketItems) => {
  return createAction(BASKET_ACTION_TYPES.SET_BASKET, basketItems)
}

export const updateBasketItemCount = (basketItems, item, newCount, isPerPiece) => {
  const newBasketItems = updateItemCount(basketItems, item, newCount, isPerPiece)
  return createAction(BASKET_ACTION_TYPES.SET_BASKET, newBasketItems)
}

export const setIsBasketOpen = (isBasketOpen) => 
  createAction(BASKET_ACTION_TYPES.SET_IS_BASKET_OPEN, isBasketOpen)

export const addBasketItem = (basketItems, itemToAdd, isDozen) => {
  const newBasketItems = addItemToBasket(basketItems, itemToAdd, isDozen)
  return createAction(BASKET_ACTION_TYPES.SET_BASKET, newBasketItems)
}

export const subtractBasketItem = (basketItems, itemToSubtract, isDozen) => {
  const newBasketItems = subtractItemFromBasket(basketItems, itemToSubtract, isDozen)
  return createAction(BASKET_ACTION_TYPES.SET_BASKET, newBasketItems)
}

export const removeBasketItem = (basketItems, itemToRemove) => {
  const newBasketItems = removeItemFromBasket(basketItems, itemToRemove)
  return createAction(BASKET_ACTION_TYPES.SET_BASKET, newBasketItems)
}

export const setSearchItems = (basketItems) => 
  createAction(BASKET_ACTION_TYPES.SET_SEARCH_ITEMS, basketItems)

export const setTotalCountStart = () => 
createAction(BASKET_ACTION_TYPES.SET_BASKET_TOTAL_START)

export const setTotalCountSuccess = (basketItems) => {
  return createAction(BASKET_ACTION_TYPES.SET_BASKET_TOTAL_SUCCESS, setTotalProductCount(basketItems))
}

export const setTotalCountFailed = (error) =>
  createAction(BASKET_ACTION_TYPES.SET_BASKET_TOTAL_FAILED, error)

export const updateSearchItemsAfterBasketUpdateStart = () =>
  createAction(BASKET_ACTION_TYPES.UPDATE_SEARCH_ITEMS_AFTER_BASKET_UPDATE_START)

export const updateSearchItemsAfterBasketUpdateSuccess = (basketItems, searchItems) => {
  const newSearchItems = searchItemsUpdateAfterBasketUpdate(basketItems, searchItems)
  return createAction(BASKET_ACTION_TYPES.UPDATE_SEARCH_ITEMS_AFTER_BASKET_UPDATE_SUCCESS, newSearchItems)
}

export const updateSearchItemsAfterBasketUpdateFailed = (error) =>
  createAction(BASKET_ACTION_TYPES.UPDATE_SEARCH_ITEMS_AFTER_BASKET_UPDATE_FAILED)

export const removePiecesFromItem = (basketItems, piecesToRemove) => {
  let newBasketItems = []
  if(piecesToRemove.dozenCount === 0){
    newBasketItems = removeItemFromBasket(basketItems, piecesToRemove)
  }
  else{
    newBasketItems = removePieces(basketItems, piecesToRemove)
  }
  return createAction(BASKET_ACTION_TYPES.SET_BASKET, newBasketItems)
}

export const removeDozensFromItem = (basketItems, dozensToRemove) => {
  let newBasketItems = []
  if(dozensToRemove.count === 0){
    newBasketItems = removeItemFromBasket(basketItems, dozensToRemove)
  }
  else{
    newBasketItems = removeDozens(basketItems, dozensToRemove)
  }
  return createAction(BASKET_ACTION_TYPES.SET_BASKET, newBasketItems)
}