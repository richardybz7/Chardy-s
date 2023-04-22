import { useDispatch, useSelector } from "react-redux"
import { selectBasketItems } from "../../store/basket/basket.selector"
import { selectCurrentUser } from "../../store/user/user.selector"
import { addBasketItem, setTotalCountStart } from "../../store/basket/basket.action"
import { updateBasketFieldOfUser } from "../../utils/firebase/firebase.utils"
import { AddToBoxButton, ButtonContainer, BuyADozenButton, DetailContainer, DetailLabel, ImageAndDetailContainer, PriceLabel, SearchBoxItem, SearchImageResult } from "./searchbox-items.styles"

const SearchBoxItems = ({item}) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const basketItems = useSelector(selectBasketItems)
  const addPieceToBasketHandler = () => {
    if(!currentUser) return
    const newBasket = addBasketItem(basketItems, item, false)
    dispatch(newBasket)
    dispatch(setTotalCountStart())
    updateBasketFieldOfUser(currentUser, newBasket.payload)
  }
  const addDozenToBasketHandler = () => {
    if(!currentUser) return
    const newBasket = addBasketItem(basketItems, item, true)
    dispatch(newBasket)
    dispatch(setTotalCountStart())
    updateBasketFieldOfUser(currentUser, newBasket.payload)
  }
  return (
    <SearchBoxItem>
      <ImageAndDetailContainer>
        <SearchImageResult imageUrl={item.imageUrl && item.imageUrl}/>
        <DetailContainer>
          <DetailLabel>{item.name}</DetailLabel>
          <PriceLabel>P{item.itemPrice}/piece P{item.dozenPrice}/dozen</PriceLabel>
        </DetailContainer>
      </ImageAndDetailContainer>
      <ButtonContainer>
        <AddToBoxButton onClick={addPieceToBasketHandler}>buy a piece</AddToBoxButton>
        <BuyADozenButton onClick={addDozenToBasketHandler}>buy a dozen</BuyADozenButton>
      </ButtonContainer>
    </SearchBoxItem>
  )
}

export default SearchBoxItems