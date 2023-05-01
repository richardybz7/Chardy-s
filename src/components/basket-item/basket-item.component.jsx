import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addBasketItem, subtractBasketItem, setTotalCountStart, removeBasketItem } from "../../store/basket/basket.action"
import { selectBasketItems } from "../../store/basket/basket.selector"
import { selectCurrentUser } from "../../store/user/user.selector"
import { updateBasketFieldOfUser } from "../../utils/firebase/firebase.utils"
import { ItemContainer, ItemLabel, ItemCount, ItemImage, ActionsContainer, ActionContainer, ItemButton, NumberOfDonutsLabel, ButtonAndCountContainer } from "./basket-item.styles"
import { useRef } from "react"
const BasketItem = ({item, perPiece}) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const basketItems = useSelector(selectBasketItems)
  const subtractItemHandler = () => {
    if(item.count === 1 && item.dozenCount === 0) {
      removeItemHandler()
    }
    else{
      const newBasket = subtractBasketItem(basketItems, item, false)
      dispatch(newBasket)
      dispatch(setTotalCountStart())
      updateBasketFieldOfUser(currentUser, newBasket.payload)
    }
  }
  const addItemHandler = () => {
    const newBasket = addBasketItem(basketItems, item, false)
    dispatch(newBasket)
    dispatch(setTotalCountStart())
    updateBasketFieldOfUser(currentUser, newBasket.payload)
  }
  const addDozenHandler = () => {
    const newBasket = addBasketItem(basketItems, item, true)
    dispatch(newBasket)
    dispatch(setTotalCountStart())
    updateBasketFieldOfUser(currentUser, newBasket.payload)
  }
  const subtractDozenHandler = () => {
    if(item.count === 0 && item.dozenCount === 1) {
      removeItemHandler()
    }
    else{
      const newBasket = subtractBasketItem(basketItems, item, true)
      dispatch(newBasket)
      dispatch(setTotalCountStart())
      updateBasketFieldOfUser(currentUser, newBasket.payload)
    }
  }
  const removeItemHandler = () => {
    const newBasket = removeBasketItem(basketItems, item)
    dispatch(newBasket)
    dispatch(setTotalCountStart())
    updateBasketFieldOfUser(currentUser, newBasket.payload)
  }
  return (
    <ItemContainer>
      <ItemImage imageUrl={ item.imageUrl && item.imageUrl }/>
      <ActionsContainer>
        <ItemLabel>{item.name}</ItemLabel>
        <ActionContainer>
          {
            perPiece ? 
              <NumberOfDonutsLabel># of pieces: </NumberOfDonutsLabel>
              :
              <NumberOfDonutsLabel># of dozen: </NumberOfDonutsLabel>
          }
          <ButtonAndCountContainer>
            {
              perPiece ? (
                <Fragment>
                  <ItemButton onClick={subtractItemHandler}>-</ItemButton>
                  <ItemCount>{item.count}</ItemCount>
                  <ItemButton onClick={addItemHandler}>+</ItemButton>
                </Fragment>
              ) : (
                <Fragment>
                  <ItemButton onClick={subtractDozenHandler}>-</ItemButton>
                  <ItemCount>{item.dozenCount}</ItemCount>
                  <ItemButton onClick={addDozenHandler}>+</ItemButton>
                </Fragment>
              )
            }
            
          </ButtonAndCountContainer>
        </ActionContainer>
      </ActionsContainer>
    </ItemContainer>
  )
}

export default BasketItem