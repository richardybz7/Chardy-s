import { BASKET_ACTION_TYPES } from "./basket.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const existingBasketItem = (basketItems, itemToFind) => {
  return basketItems.find((basketItem) => basketItem.id === itemToFind.id)
}

const addItemToBasket = (basketItems, itemToAdd, isDozen) => {
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

const removeItemFromBasket = (basketItems, itemToRemove, isDozen) => {
  if (isDozen) {
    return basketItems.map((basketItem) => basketItem.id === itemToRemove.id ? { ...basketItem, dozenCount: basketItem.dozenCount - 1 } : basketItem)
  }
  else{
    return basketItems.map((basketItem) => basketItem.id === itemToRemove.id ? { ...basketItem, count: basketItem.count - 1 } : basketItem)
  }
}

export const setIsBasketOpen = (isBasketOpen) => createAction(BASKET_ACTION_TYPES.SET_IS_BASKET_OPEN, isBasketOpen)

export const addBasketItem = (basketItems, itemToAdd, isDozen) => {
  const newCartItems = addItemToBasket(basketItems, itemToAdd, isDozen)
  
  return createAction(BASKET_ACTION_TYPES.SET_BASKET_ITEM, newCartItems)
}

export const removeBasketItem = (basketItems, itemToRemove, isDozen) => {
  const newCartItems = removeItemFromBasket(basketItems, itemToRemove, isDozen)

  return createAction(BASKET_ACTION_TYPES.SET_BASKET_ITEM, newCartItems)
}