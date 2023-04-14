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
  PerDozenImage,
  EmptyBasketImage,
  EmptyBasketImageContainer,
  PerPieceImageContainer
} from "./basket-dropdown.styles";
import { setSearchItems } from "../../store/basket/basket.action";
import { Fragment } from "react";

const BasketDropdown = () => {
  const dispatch = useDispatch()
  const basketItems = useSelector(selectBasketItems)
  const userBasket = basketItems
  const hasCountItems = userBasket
    .filter((item) => item.count > 0).map((item) =>
      <BasketItem key={item.id} item={item} perPiece={true}/>
    )
  
  const hasDozenItems = userBasket
    .filter((item) => item.dozenCount > 0).map((item) =>
      <BasketItem key={item.id} item={item} perPiece={false}/>
    )

  const GoToCheckoutHandler = () => {
    if(basketItems.length > 0)
    dispatch(setSearchItems(basketItems))
  }
  return (
    <BasketDropdownContainer>
      <BasketItemsContainer>
        <BasketItemsPerPieceContainer>
          <BasketHeader>
            <BasketHeaderLabel>PER PIECE</BasketHeaderLabel>
            <PerPieceImageContainer>
              <PerPieceImage/>
            </PerPieceImageContainer>
          </BasketHeader>
          <BasketItems>
            {
              hasCountItems.length > 0 ? 
                hasCountItems
              : 
              <Fragment>
                <EmptyBasketImageContainer>
                  <EmptyBasketImage perPieceDozen='true'/>
                </EmptyBasketImageContainer>
              </Fragment>
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
              hasDozenItems.length > 0 ? 
                hasDozenItems
              : 
              <Fragment>
                <EmptyBasketImageContainer>
                  <EmptyBasketImage perPieceDozen='false'/>
                </EmptyBasketImageContainer>
              </Fragment>
            }
          </BasketItems>
        </BasketItemsPerDozenContainer>
      </BasketItemsContainer>
      <BasketButtonContainer>
        <BasketButton to={ basketItems.length > 0 && '/checkout'} onClick={() => GoToCheckoutHandler()} disabled={basketItems.length}>GO TO CHECKOUT</BasketButton>
      </BasketButtonContainer>
    </BasketDropdownContainer>
  )
}

export default BasketDropdown;