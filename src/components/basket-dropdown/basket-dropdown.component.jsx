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
  const selectItems = useSelector(selectBasketItems)
  const hasCountItems = Object.keys(selectItems)
    .filter((key) => selectItems[key].count > 0)
    .map((key) => (
      <BasketItem key={key} item={selectItems[key]} perPiece={true}/>
    ))
  const hasDozenItems = Object.keys(selectItems)
    .filter((key) => selectItems[key].dozenCount > 0)
    .map((key) => (
      <BasketItem key={key} item={selectItems[key]} perPiece={false}/>
    ))
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
              hasCountItems.length ? 
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
              hasDozenItems.length ? 
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