import { useDispatch, useSelector } from "react-redux";
import { addBasketItem, addItemToBasket, setTotalCountOfProducts, setTotalCountStart } from "../../store/basket/basket.action";
import { selectBasketItems, selectTotalProductCount } from "../../store/basket/basket.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { updateBasketFieldOfUser } from "../../utils/firebase/firebase.utils";
import { AddToBoxButton, CardContainer, BuyADozenButton, Label, ButtonContainer, Price, PriceLabel, PriceContainer, ProductImage } from "./card.styles";
import { updateSearchItemsAfterBasketUpdateStart } from "../../store/basket/basket.saga";
import { useRef } from "react";

const Card = ({product}) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const basketItems = useSelector(selectBasketItems)
  const addToBoxButtonRef = useRef([])
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
  const onMouseOverHandler = () => {
    addToBoxButtonRef.current.style.backgroundColor = '#FF5938'
  }
  const onMouseOutHandler = () => {
    addToBoxButtonRef.current.style.backgroundColor = '#FF8F8F'
  }
  return (
    <CardContainer>
      <ProductImage/>
      <PriceContainer>
        <Price>P{product.itemPrice}</Price>
        <PriceLabel>per piece</PriceLabel>
      </PriceContainer>
      <PriceContainer>
        <Price>P{product.dozenPrice}</Price>
        <PriceLabel>per dozen</PriceLabel>
      </PriceContainer>
      <Label>{product.name ? product.name : product}</Label>
      <ButtonContainer>
        <AddToBoxButton ref={addToBoxButtonRef} onClick={addPieceToBasketHandler} onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler}>buy a piece</AddToBoxButton>
        <BuyADozenButton onClick={addDozenToBasketHandler}>buy a dozen</BuyADozenButton>
      </ButtonContainer>
    </CardContainer>
  )
}

export default Card;