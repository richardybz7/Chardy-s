import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Search from "../../components/searchbox/searchbox.component";
import { ActionsHeaderLabel, CashOnDeliveryButton, CheckoutItemsContainer, CheckoutLabel, CheckoutPageContainer, CheckoutPageParentContainer, CheckoutPaymentAndPlaceOrderContainer, CreditDebitCardButton, DeliveryAddressContainer, DeliveryInputArea, DetailsAndActionHeaderContainer, EditAddressButton, ListHeaderContainer, ListHeaderParentContainer, PaymentMethodContainer, PaymentMethodLabel, PaymentMethodLabelContainer, PaymentMethodParentContainer, PaymentOptionsContainer, PlaceOrderButton, PlaceOrderContainer, QuantityHeaderLabel, SearchBoxContainer, TotalItemPriceHeaderLabel, TotalPriceContainer, TotalPriceLabel, UnitPriceHeaderLabel } from "./checkout.styles";
import { Fragment } from "react";
import { selectBasketItems, selectSearchItems } from "../../store/basket/basket.selector";

const Checkout = () => {
  const basketItems = useSelector(selectBasketItems)
  const searchItems = useSelector(selectSearchItems)
  return (
    <CheckoutPageParentContainer>
      <CheckoutPageContainer>
        <SearchBoxContainer>
          <Search placeholder='Search checkout items' items={basketItems} location='checkout'/>
        </SearchBoxContainer>
        <ListHeaderParentContainer>
          <ListHeaderContainer>
            <CheckoutLabel>Checkout</CheckoutLabel>
            <DetailsAndActionHeaderContainer>
              <UnitPriceHeaderLabel>Unit Price</UnitPriceHeaderLabel>
              <QuantityHeaderLabel>Quantity</QuantityHeaderLabel>
              <TotalItemPriceHeaderLabel>Total Price</TotalItemPriceHeaderLabel>
              <ActionsHeaderLabel>Actions</ActionsHeaderLabel>
            </DetailsAndActionHeaderContainer>
          </ListHeaderContainer>
        </ListHeaderParentContainer>
        <CheckoutItemsContainer>
        {
          searchItems.length ? (
            searchItems.map((item) => 
              <CheckoutItem key={item.id} item={item}/>
            )
          ):(
            <Fragment/>
          )
        }
        </CheckoutItemsContainer>
        <TotalPriceContainer>
          <TotalPriceLabel>Total price: P
          {
            basketItems.length ? (
              basketItems.reduce((total, basketItem) => 
                total + 
                (basketItem.itemPrice * basketItem.count) +
                (basketItem.dozenPrice * basketItem.dozenCount)
                ,0
                )
            ):(
              0
            )
          }
          </TotalPriceLabel>
        </TotalPriceContainer>
        <CheckoutPaymentAndPlaceOrderContainer>
          <PaymentMethodParentContainer>
            <PaymentMethodLabelContainer>
              <PaymentMethodLabel>Payment method:</PaymentMethodLabel>
            </PaymentMethodLabelContainer>
            <PaymentMethodContainer>
              <PaymentOptionsContainer>
                <CashOnDeliveryButton>Cash on delivery</CashOnDeliveryButton>
                <CreditDebitCardButton>Credit/Debit Card</CreditDebitCardButton>
              </PaymentOptionsContainer>
              <DeliveryAddressContainer>
                <DeliveryInputArea>Hello</DeliveryInputArea>
                <EditAddressButton>Edit</EditAddressButton>
              </DeliveryAddressContainer>
            </PaymentMethodContainer>
          </PaymentMethodParentContainer>
          <PlaceOrderContainer>
            <PlaceOrderButton>Place Order</PlaceOrderButton>
          </PlaceOrderContainer>
        </CheckoutPaymentAndPlaceOrderContainer>
      </CheckoutPageContainer>
    </CheckoutPageParentContainer>
  )
}

export default Checkout;