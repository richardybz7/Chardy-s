import { useDispatch, useSelector } from "react-redux";
import { addBasketItem, setTotalCountStart } from "../../store/basket/basket.action";
import { selectBasketItems } from "../../store/basket/basket.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { updateBasketFieldOfUser } from "../../utils/firebase/firebase.utils";
import { AddToBoxButton, CardContainer, BuyADozenButton, Label, ButtonContainer, Price, PriceLabel, PriceContainer, ProductImage, BugRecoveryButton, CountIndicatorContainer } from "./card.styles";
import { useEffect } from "react";

const Card = ({product}) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const basketItems = useSelector(selectBasketItems)
  const addPieceToBasketHandler = () => {
    if(!currentUser) return
    const newBasket = addBasketItem(basketItems, product, false)
    dispatch(newBasket)
    dispatch(setTotalCountStart())
    updateBasketFieldOfUser(currentUser, newBasket.payload)
  }
  const addDozenToBasketHandler = () => {
    if(!currentUser) return
    const newBasket = addBasketItem(basketItems, product, true)
    dispatch(newBasket)
    dispatch(setTotalCountStart())
    updateBasketFieldOfUser(currentUser, newBasket.payload)
  }
  let countTotal = 0
  for(let i=0; i < basketItems.length; i++){
    basketItems[i].name === product.name && (countTotal = basketItems[i].count + basketItems[i].dozenCount)
  }
  return (
    <CardContainer>
      <CountIndicatorContainer count={countTotal}>{countTotal}</CountIndicatorContainer>
      <ProductImage imageUrl={product.imageUrl && product.imageUrl}/>
      <PriceContainer>
        <Price>P{product.itemPrice}</Price>
        <PriceLabel>per piece</PriceLabel>
      </PriceContainer>
      <PriceContainer>
        <Price>P{product.dozenPrice}</Price>
        <PriceLabel>per dozen</PriceLabel>
      </PriceContainer>
      <Label>{product.name}</Label>
      <ButtonContainer>
        <BugRecoveryButton/>
        <AddToBoxButton onClick={addPieceToBasketHandler}>buy a piece</AddToBoxButton>
        <BuyADozenButton onClick={addDozenToBasketHandler}>buy a dozen</BuyADozenButton>
      </ButtonContainer>
    </CardContainer>
  )
}

export default Card;