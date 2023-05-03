import { setIsBasketOpen } from "../../store/basket/basket.action"

export const CloseBasket = (dispatch, isBasketOpen) => {
  const basketDropdown = () => {
    isBasketOpen && dispatch(setIsBasketOpen(false))
  }
  return basketDropdown 
}