import { useDispatch, useSelector } from "react-redux";
import { addBasketItem, addItemToBasket, setTotalCountOfProducts } from "../../store/basket/basket.action";
import { selectBasketItems } from "../../store/basket/basket.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { updateBasketFieldOfUser } from "../../utils/firebase/firebase.utils";
import { AddToBoxButton, CardContainer, BuyADozenButton, Label, ButtonContainer } from "./card.styles";

const Card = ({product}) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const basketItems = useSelector(selectBasketItems)
  const addPieceToBasketHandler = () => {
    const newBasket = addBasketItem(basketItems, product, false)
    dispatch(newBasket)
    updateBasketFieldOfUser(currentUser, newBasket.payload)
  }
  const addDozenToBasketHandler = () => {
    const newBasket = addBasketItem(basketItems, product, true)
    dispatch(newBasket)
    updateBasketFieldOfUser(currentUser, newBasket.payload)
  }

  return (
    <CardContainer>
      <Label>{product.name ? product.name : product}</Label>
      <ButtonContainer>
        <AddToBoxButton onClick={addPieceToBasketHandler}>buy a piece</AddToBoxButton>
        <BuyADozenButton onClick={addDozenToBasketHandler}>buy a dozen</BuyADozenButton>
      </ButtonContainer>
    </CardContainer>
  )
}

export default Card;