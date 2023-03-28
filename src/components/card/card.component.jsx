import { useDispatch, useSelector } from "react-redux";
import { addBasketItem } from "../../store/basket/basket.action";
import { selectBasketItems } from "../../store/basket/basket.selector";
import { AddToBoxButton, CardContainer, BuyADozenButton, Label, ButtonContainer } from "./card.styles";

const Card = ({product}) => {
  const dispatch = useDispatch()
  const basketItems = useSelector(selectBasketItems)
  const addPieceToBasket = () => dispatch(addBasketItem(basketItems, product, false))
  const addDozenToBasket = () => dispatch(addBasketItem(basketItems, product, true))
  return (
    <CardContainer>
      <Label>{product.name ? product.name : product}</Label>
      <ButtonContainer>
        <AddToBoxButton onClick={addPieceToBasket}>buy a piece</AddToBoxButton>
        <BuyADozenButton onClick={addDozenToBasket}>buy a dozen</BuyADozenButton>
      </ButtonContainer>
    </CardContainer>
  )
}

export default Card;