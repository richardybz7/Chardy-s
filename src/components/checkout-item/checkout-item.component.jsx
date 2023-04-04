import { AddQuantityButton, CheckoutItemContainer, DetailContainer, ItemDetailsAndActionContainer, ItemImageAndDetailsContainer, ItemImageContainer, PerItemAndActionContainer, ItemDetailsAndActionParentContainer, PerPieceOrDozenLabel, QuantityContainer, QuantityInput, ReduceQuantityButton, RemoveActionButton, TotalPriceLabel, UnitPriceLabel } from "./checkout-item.styles"

import { selectBasketItems, selectSearchItems } from "../../store/basket/basket.selector"
import { selectCurrentUser } from "../../store/user/user.selector"
import { useDispatch, useSelector } from "react-redux"
import { addBasketItem, subtractBasketItem, setTotalCountStart, updateBasketItemCount, removeBasketItem, updateSearchItemsAfterBasketUpdateStart } from "../../store/basket/basket.action"
import { updateBasketFieldOfUser } from "../../utils/firebase/firebase.utils"
import { useRef } from "react"

const CheckoutItem = ({item}) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const basketItems = useSelector(selectBasketItems)
  const searchItems = useSelector(selectSearchItems)
  const perPieceRef = useRef()
  const perDozenRef = useRef()

  const dispatchAndUpdate = (currentUser, newBasket) => {
    dispatch(newBasket)
    dispatch(setTotalCountStart())
    dispatch(updateSearchItemsAfterBasketUpdateStart())
    updateBasketFieldOfUser(currentUser, newBasket.payload)
  }
  const reduceQuantityHandler = (perPiece) => {
    if(perPiece) {
      const newBasket = subtractBasketItem(basketItems, item, false)
      dispatchAndUpdate(currentUser, newBasket)
    }
    else{
      const newBasket = subtractBasketItem(basketItems, item, true)
      dispatchAndUpdate(currentUser, newBasket)
    }
  }
  const addQuantityHandler = (perPiece) => {
    if(perPiece) {
      const newBasket = addBasketItem(basketItems, item, false)
      dispatchAndUpdate(currentUser, newBasket)
    }
    else{
      const newBasket = addBasketItem(basketItems, item, true)
      dispatchAndUpdate(currentUser, newBasket)
    }
  }
  const onChangeQuantityHandler = (perPiece) => {
    if(perPiece) {
      const newBasket = updateBasketItemCount(basketItems, item, parseInt(perPieceRef.current.value), perPiece)
      dispatchAndUpdate(currentUser, newBasket)
    }
    else{
      const newBasket = updateBasketItemCount(basketItems, item, parseInt(perDozenRef.current.value), perPiece)
      dispatchAndUpdate(currentUser, newBasket)
    }
  }
  const onKeyPressHandler = (e) => {
    const { key } = e
    if( key === 'e' || key === '.' ) e.preventDefault()
  }
  const removeItemHandler = () => {
    const newBasket = removeBasketItem(basketItems, item)
    dispatchAndUpdate(currentUser, newBasket)
  }
  return (
    <CheckoutItemContainer>
      <ItemImageAndDetailsContainer>
        <ItemImageContainer/>
        <DetailContainer>{item.name}</DetailContainer>
      </ItemImageAndDetailsContainer>
      <PerItemAndActionContainer>
        <ItemDetailsAndActionParentContainer>
          <ItemDetailsAndActionContainer>
            <PerPieceOrDozenLabel>per Piece</PerPieceOrDozenLabel>
            <UnitPriceLabel>P{item.itemPrice}</UnitPriceLabel>
            <QuantityContainer>
              <ReduceQuantityButton onClick={() => reduceQuantityHandler(true)} disabled={item.count < 1}>&#60;</ReduceQuantityButton>
              <QuantityInput ref={perPieceRef} value={item.count} onKeyPress={onKeyPressHandler} onChange={() => onChangeQuantityHandler(true)}></QuantityInput>
              <AddQuantityButton onClick={() => addQuantityHandler(true)}>&#62;</AddQuantityButton>
            </QuantityContainer>
            <TotalPriceLabel>P{item.count * item.itemPrice}</TotalPriceLabel>
          </ItemDetailsAndActionContainer>
          <ItemDetailsAndActionContainer>
            <PerPieceOrDozenLabel>per Dozen</PerPieceOrDozenLabel>
            <UnitPriceLabel>P{item.dozenPrice}</UnitPriceLabel>
            <QuantityContainer>
              <ReduceQuantityButton onClick={() => reduceQuantityHandler(false)} disabled={item.dozenCount < 1}>&#60;</ReduceQuantityButton>
              <QuantityInput ref={perDozenRef} value={item.dozenCount} onKeyPress={onKeyPressHandler} onChange={() => onChangeQuantityHandler(false)}></QuantityInput>
              <AddQuantityButton onClick={() => addQuantityHandler(false)}>&#62;</AddQuantityButton>
            </QuantityContainer>
            <TotalPriceLabel>P{item.dozenCount * item.dozenPrice}</TotalPriceLabel>
          </ItemDetailsAndActionContainer>
        </ItemDetailsAndActionParentContainer>
        <RemoveActionButton onClick={() => removeItemHandler()}>Remove</RemoveActionButton>
      </PerItemAndActionContainer>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem