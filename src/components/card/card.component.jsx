import { useDispatch, useSelector } from "react-redux";
import { addBasketItem, setTotalCountStart } from "../../store/basket/basket.action";
import { selectBasketItems } from "../../store/basket/basket.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { updateBasketFieldOfUser } from "../../utils/firebase/firebase.utils";
import { AddToBoxButton, CardContainer, BuyADozenButton, Label, ButtonContainer, Price, PriceLabel, PriceContainer, ProductImage, BugRecoveryButton, CountIndicatorContainer, PriceParentContainer, PriceDivider, ProductImageContainer } from "./card.styles";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { setShowPopup } from "../../store/popup/popup.action";
import DonutImageLoad from "../donutImageLoading/donutImageLoading.component";

const Card = ({product}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentUser = useSelector(selectCurrentUser)
  let basketItems = useSelector(selectBasketItems)
  const scrollRef = useRef(null)
  const isInView = useInView(scrollRef, {whileInView: 'visible'})
  const [loadedImage, setLoadedImage] = useState(false)

  const addPieceToBasketHandler = () => {
    if(!currentUser) {
      navigate('/auth')
      dispatch(setShowPopup(true))
      setTimeout(() => {
        dispatch(setShowPopup(false))
      }, 3000);
      return
    }
    if(typeof basketItems === 'object')
      if(Object.values(basketItems).length < 1)
        basketItems = []

    const newBasket = addBasketItem(basketItems, product, false)
    dispatch(newBasket)
    dispatch(setTotalCountStart())
    updateBasketFieldOfUser(currentUser, newBasket.payload)
  }
  const addDozenToBasketHandler = () => {
    if(!currentUser) {
      navigate('/auth')
      dispatch(setShowPopup(true))
      setTimeout(() => {
        dispatch(setShowPopup(false))
      }, 3000);
      return
    }
    if(typeof basketItems === 'object')
      if(Object.values(basketItems).length < 1)
        basketItems = []

    const newBasket = addBasketItem(basketItems, product, true)
    dispatch(newBasket)
    dispatch(setTotalCountStart())
    updateBasketFieldOfUser(currentUser, newBasket.payload)
  }
  let countTotal = 0
  if(basketItems && basketItems.length > 0){
    for(let i=0; i < basketItems.length; i++){
      basketItems[i].name === product.name && (countTotal = basketItems[i].count + basketItems[i].dozenCount)
    }
  }
  const imageOnloadHandler = () => {
    setLoadedImage(true)
  }
  return (
    <CardContainer ref={scrollRef} isinview={isInView ? 'a' : 'b'}>
      <CountIndicatorContainer count={countTotal}>{countTotal}</CountIndicatorContainer>
      <ProductImageContainer>
      <ProductImage src={product.imageUrl} onLoad={imageOnloadHandler} loaded={loadedImage}></ProductImage>
      <AnimatePresence>
        {
          !loadedImage && <DonutImageLoad/>
        }
      </AnimatePresence>
      </ProductImageContainer>
      <PriceParentContainer>
        <PriceContainer>
          <Price>P{product.itemPrice}</Price>
          <PriceLabel>&nbsp;per piece</PriceLabel>
        </PriceContainer>
        <PriceDivider/>
        <PriceContainer>
          <Price>P{product.dozenPrice}</Price>
          <PriceLabel>&nbsp;per dozen</PriceLabel>
        </PriceContainer>
      </PriceParentContainer>
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