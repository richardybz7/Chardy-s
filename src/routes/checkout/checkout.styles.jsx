import styled from "styled-components";
import { BaseButton } from "../../components/button/button.styles";

export const CheckoutPageParentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 0.85em;
  margin-bottom: 200px;
`

export const CheckoutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1000px;
`

export const SearchBoxContainer = styled.div`
  width: 50%;
  padding: 1em 0;
  @media screen and (max-width: 500px){
    width: 90%;
  }
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
  @media screen and (max-width: 565px){
    flex-direction: column;
  }
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
  gap: 50px;
  @media screen and (max-width: 921px){
    display: none;
  }
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
  @media screen and (max-width: 565px){
    display: flex;
    justify-content: flex-end;
    padding-top: 1em;
  }
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