import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addBasketItem, addItemToBasket, removeBasketItem, removeItemFromBasket, setTotalCountOfProducts } from "../../store/basket/basket.action"
import { selectBasketItems } from "../../store/basket/basket.selector"
import { selectCurrentUser } from "../../store/user/user.selector"
import { updateBasketFieldOfUser } from "../../utils/firebase/firebase.utils"
import { ItemContainer, ItemLabel, ItemCount, ItemImage, ActionsContainer, ActionContainer, ItemButton, NumberOfDonutsLabel, ButtonAndCountContainer } from "./basket-item.styles"
const BasketItem = ({item, perPiece}) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const basketItems = useSelector(selectBasketItems)
  const removeItemHandler = () => {
    const newBasket = removeBasketItem(basketItems, item, false)
    dispatch(newBasket)
    updateBasketFieldOfUser(currentUser, newBasket.payload)
  }
  const addItemHandler = () => {
    const newBasket = addBasketItem(basketItems, item, false)
    dispatch(newBasket)
    updateBasketFieldOfUser(currentUser, newBasket.payload)
  }
  const addDozenHandler = () => {
    const newBasket = addBasketItem(basketItems, item, true)
    dispatch(newBasket)
    updateBasketFieldOfUser(currentUser, newBasket.payload)
  }
  const removeDozenHandler = () => {
    const newBasket = removeBasketItem(basketItems, item, true)
    dispatch(newBasket)
    updateBasketFieldOfUser(currentUser, newBasket.payload)
  }

  useEffect(() => {
    dispatch(setTotalCountOfProducts(basketItems))
  },[basketItems])
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
                <Fragment>
                  <ItemButton onClick={removeItemHandler}>-</ItemButton>
                  <ItemCount>{item.count}</ItemCount>
                  <ItemButton onClick={addItemHandler}>+</ItemButton>
                </Fragment>
              ) : (
                <Fragment>
                  <ItemButton onClick={removeDozenHandler}>-</ItemButton>
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