import { useDispatch, useSelector } from "react-redux";
import { selectBasketItems } from "../../store/basket/basket.selector";
import BasketItem from "../basket-item/basket-item.component";
import { 
  BasketDropdownContainer, 
  BasketItemsPerPieceContainer, 
  BasketItemsPerDozenContainer, 
  BasketItemsContainer, 
  EmptyBasketLabel, 
  BasketButtonContainer, 
  BasketButton, 
  BasketDivider, 
  BasketHeader, 
  BasketItems, 
  BasketHeaderLabel,
  PerPieceImage,
  PerDozenImage
} from "./basket-dropdown.styles";
import { setSearchItems } from "../../store/basket/basket.action";

const BasketDropdown = () => {
  const dispatch = useDispatch()
  const basketItems = useSelector(selectBasketItems)
  const userBasket = basketItems
  console.log('USER BASKET: ', userBasket)
  const hasCountItems = userBasket && userBasket
    .filter((item) => item.count > 0).map((item) =>
      <BasketItem key={item.id} item={item} perPiece={true}/>
    )
  
  const hasDozenItems = userBasket && userBasket
    .filter((item) => item.dozenCount > 0).map((item) =>
      <BasketItem key={item.id} item={item} perPiece={false}/>
    )

  const GoToCheckoutHandler = () => {
    dispatch(setSearchItems(basketItems))
  }
  return (
    <BasketDropdownContainer>
      <BasketItemsContainer>
        <BasketItemsPerPieceContainer>
          <BasketHeader>
            <BasketHeaderLabel>PER PIECE</BasketHeaderLabel>
            <PerPieceImage/>
          </BasketHeader>
          <BasketItems>
            {
              hasCountItems && hasCountItems.length ? 
                hasCountItems
              : 
              <EmptyBasketLabel>Click 'buy a piece'</EmptyBasketLabel>
            }
          </BasketItems>
        </BasketItemsPerPieceContainer>
        <BasketDivider/>
        <BasketItemsPerDozenContainer>
          <BasketHeader>
            <BasketHeaderLabel>PER DOZEN</BasketHeaderLabel>
            <PerDozenImage/>
          </BasketHeader>
          <BasketItems>
            {
              hasDozenItems && hasDozenItems.length ? 
                hasDozenItems
              : 
              <EmptyBasketLabel>Click 'buy a dozen'</EmptyBasketLabel>
            }
          </BasketItems>
        </BasketItemsPerDozenContainer>
      </BasketItemsContainer>
      <BasketButtonContainer>
        <BasketButton to='/checkout' onClick={() => GoToCheckoutHandler()}>GO TO CHECKOUT</BasketButton>
      </BasketButtonContainer>
    </BasketDropdownContainer>
  )
}

export default BasketDropdown;