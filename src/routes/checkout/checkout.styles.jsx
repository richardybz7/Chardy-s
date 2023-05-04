import styled from "styled-components";
import { BaseButton } from "../../components/button/button.styles";
import NoCheckoutItemSVG from '../../assets/noCheckoutItemAsset5.svg'
import CheckoutItemNotExistSVG from '../../assets/checkoutItemNotExistAsset4.svg'
import { motion } from "framer-motion";

export const CheckoutPageParentContainer = styled(motion.div).attrs({
  initial:{opacity: 0},
  animate:{opacity: 1},
  exit:{opacity: 0}
})`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 100px;
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
  border-bottom: 3px solid var(--color1);
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
  color: var(--color1);
  font-weight: bold;
`
export const DetailsAndActionHeaderContainer = styled.div`
  display: flex;
  gap: 45px;
  @media screen and (max-width: 921px){
    display: none;
  }
  color: var(--color1);
  font-weight: bold;
`
export const UnitPriceHeaderLabel = styled.label`
  padding-right: 0.5em;
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
  border-top: 3px solid var(--color1);
  color: var(--color1);
`
export const TotalPriceLabel = styled.label`
  padding: 1em 0;
  font-size: 1.2rem;
  font-weight: bold;
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
  transition: 0.2s ease;
  background-color: var(--color1);
  color: white;
  border-radius: 2em;
  :hover{
    outline: none;
    background-color: var(--color4);
    color: black;
  }
`
export const PaymentMethodParentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`
export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  :last-child{
    gap: 0.5em;
  }
`
export const PaymentMethodLabelContainer = styled.div`
  padding: 0.5em 0;
`
export const PaymentMethodLabel = styled.label``

export const PaymentOptionsContainer = styled.div`
  display: flex;
  gap: 1em;
`
export const PaymentOptionButton = styled(BaseButton)`
  background-color: var(--color1);
  color: white;
  transition: 0.2s ease;
  border-radius: 2em;
  :hover,
  :focus{
    outline: none;
    color: black;
    background-color: var(--color4);
  }
`
export const PaymentOptionButtonHighlighted = styled(BaseButton)`
  outline: none;
  background-color: var(--color2);
  color: white;
  border-radius: 2em;
`
export const DisclaimerContainer = styled.div`
  width: var(--checkOutWidth);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4em 0;
`
export const DisclaimerLabel = styled.div`
  font-size: 0.8em;
  color: orange;
`
export const NoCheckoutImage = styled.div`
  background-image: url(${NoCheckoutItemSVG});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 45vw;
  height: 60vw;
  max-width: 450px;
  max-height: 500px;
`
export const CheckoutItemNotExist = styled.div`
  background-image: url(${CheckoutItemNotExistSVG});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 45vw;
  height: 60vw;
  max-width: 450px;
  max-height: 500px;
`