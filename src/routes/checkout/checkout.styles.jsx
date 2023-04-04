import styled from "styled-components";
import { BaseButton } from "../../components/button/button.styles";

export const CheckoutPageParentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 0.85em;
`

export const CheckoutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--checkOutWidth);
`

export const SearchBoxContainer = styled.div`
  width: 50%;
  padding: 1em 0;
`

export const CheckoutItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ListHeaderParentContainer = styled.div`
  width: var(--checkOutWidth);
  border-bottom: 1px solid grey;
`
export const CheckoutPaymentAndPlaceOrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: var(--checkOutWidth);
`

export const ListHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.7em 0;
  padding-right: 2.5em;
`

export const CheckoutLabel = styled.label`
`
export const DetailsAndActionHeaderContainer = styled.div`
  display: flex;
  gap: 6vw;
`
export const UnitPriceHeaderLabel = styled.label`
`
export const QuantityHeaderLabel = styled.label`
`
export const TotalItemPriceHeaderLabel = styled.label`
`
export const ActionsHeaderLabel = styled.label`
`

export const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: var(--checkOutWidth);
  border-top: 1px solid grey;
`
export const TotalPriceLabel = styled.label`
  padding: 1em 0;
  font-size: 1rem;
`
export const PlaceOrderContainer = styled.div`
`
export const PlaceOrderButton = styled(BaseButton)`
  font-size: 1rem;
  border: 1px solid transparent;
  transition: 0.2s ease;
  :hover{
    border: 1px solid #FF7D7D;
    outline: none;
    color: #FF7D7D;
  }
`
export const PaymentMethodParentContainer = styled.div`
  display: flex;
  gap: 1em;
`
export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`
export const PaymentMethodLabelContainer = styled.div`
  padding: 0.5em 0;
`
export const PaymentMethodLabel = styled.label`

`

export const PaymentOptionsContainer = styled.div`
  display: flex;
  gap: 1em;
`
export const PaymentOptionButton = styled(BaseButton)`
  border: 1px solid transparent;
  transition: 0.2s ease;
  :hover,
  :focus{
    border: 1px solid #FF7D7D;
    outline: none;
    color: #FF7D7D;
  }
`
export const PaymentOptionButtonHighlighted = styled(BaseButton)`
  border: 1px solid #FF7D7D;
  outline: none;
  color: #FF7D7D;
`
export const DeliveryAddressContainer = styled.div`
  display: flex;
`
export const DeliveryInputArea = styled.textarea`
  border-right: none;
  border-top-left-radius: 0.3em;
  border-bottom-left-radius: 0.3em;
  min-width: 300px;
  min-height: 100px;
  font-family: var(--font-family)
`
export const EditSaveAddressButton = styled(BaseButton)`
`