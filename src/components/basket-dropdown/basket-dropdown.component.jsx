import { useSelector } from "react-redux";
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
  BasketHeaderImage 
} from "./basket-dropdown.styles";

const BasketDropdown = () => {
  const userBasket = useSelector(selectBasketItems)

  const hasCountItems = userBasket && userBasket
    .filter((item) => item.count > 0).map((item) =>
      <BasketItem key={item.id} item={item} perPiece={true}/>
    )
  
  const hasDozenItems = userBasket && userBasket
    .filter((item) => item.dozenCount > 0).map((item) =>
      <BasketItem key={item.id} item={item} perPiece={false}/>
    )
  return (
    <BasketDropdownContainer>
      <BasketItemsContainer>
        <BasketItemsPerPieceContainer>
          <BasketHeader>
            <BasketHeaderLabel>PER PIECE</BasketHeaderLabel>
            <BasketHeaderImage></BasketHeaderImage>
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
            <BasketHeaderImage></BasketHeaderImage>
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
        <BasketButton>Go to checkout</BasketButton>
      </BasketButtonContainer>
    </BasketDropdownContainer>
  )
}

export default BasketDropdown;