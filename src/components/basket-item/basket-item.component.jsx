import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addBasketItem, removeBasketItem } from "../../store/basket/basket.action"
import { selectBasketItems } from "../../store/basket/basket.selector"
import { ItemContainer, ItemLabel, ItemCount, ItemImage, ActionsContainer, ActionContainer, ItemButton, NumberOfDonutsLabel, ButtonAndCountContainer } from "./basket-item.styles"
const BasketItem = ({item, perPiece}) => {
  const dispatch = useDispatch()
  const basketItems = useSelector(selectBasketItems)
  const removeItemHandler = () => {
    dispatch(removeBasketItem(basketItems, item, false))
  }
  const addItemHandler = () => {
    dispatch(addBasketItem(basketItems, item, false))
  }
  const addDozenHandler = () => {
    dispatch(addBasketItem(basketItems, item, true))
  }
  const removeDozenHandler = () => {
    dispatch(removeBasketItem(basketItems, item, true))
  }
  return (
    <ItemContainer>
      <ItemImage></ItemImage>
      <ActionsContainer>
        <ItemLabel>{item.name}</ItemLabel>
        <ActionContainer>
          {
            perPiece ? 
              <NumberOfDonutsLabel>Number of donuts: </NumberOfDonutsLabel>
              :
              <NumberOfDonutsLabel>Number of dozen: </NumberOfDonutsLabel>
          }
          <ButtonAndCountContainer>
            {
              perPiece ? (
                <>
                  <ItemButton onClick={removeItemHandler}>-</ItemButton>
                  <ItemCount>{item.count}</ItemCount>
                  <ItemButton onClick={addItemHandler}>+</ItemButton>
                </>
              ) : (
                <>
                  <ItemButton onClick={removeDozenHandler}>-</ItemButton>
                  <ItemCount>{item.dozenCount}</ItemCount>
                  <ItemButton onClick={addDozenHandler}>+</ItemButton>
                </>
              )
            }
            
          </ButtonAndCountContainer>
        </ActionContainer>
      </ActionsContainer>
    </ItemContainer>
  )
}

export default BasketItem