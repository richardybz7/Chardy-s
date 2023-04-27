import { useDispatch, useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Search from "../../components/searchbox/searchbox.component";
import { ActionsHeaderLabel, CheckoutItemsContainer, CheckoutLabel, CheckoutPageContainer, CheckoutPageParentContainer, CheckoutPaymentAndPlaceOrderContainer, PaymentOptionButton, DeliveryAddressContainer, DeliveryInputArea, DetailsAndActionHeaderContainer, EditSaveAddressButton, ListHeaderContainer, ListHeaderParentContainer, PaymentMethodContainer, PaymentMethodLabel, PaymentMethodLabelContainer, PaymentMethodParentContainer, PaymentOptionsContainer, PlaceOrderButton, PlaceOrderContainer, QuantityHeaderLabel, SearchBoxContainer, TotalItemPriceHeaderLabel, TotalPriceContainer, TotalPriceLabel, UnitPriceHeaderLabel, PaymentOptionButtonHighlighted, DisclaimerContainer, DisclaimerLabel } from "./checkout.styles";
import { useEffect, useRef, useState } from "react";
import { selectBasketItems, selectSearchItems } from "../../store/basket/basket.selector";
import { setBasketItems, setSearchItems, setTotalCountStart } from "../../store/basket/basket.action";
import { udpatePurchasesStart } from "../../store/purchases/purchases.action";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import { updateBasketFieldOfUser } from "../../utils/firebase/firebase.utils";
import Address from "../../components/address/address.component";
import { setBurgerIsOpen } from "../../store/burger/burger.action";
import { selectIsOpenBurger } from "../../store/burger/burger.selector";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const Checkout = () => {
  const dispatch = useDispatch()
  const isBurgerOpen = useSelector(selectIsOpenBurger)
  const basketItems = useSelector(selectBasketItems)
  const searchItems = useSelector(selectSearchItems)
  const currentUser = useSelector(selectCurrentUser)
  const [codButtonClicked, setCodButtonClicked] = useState(false)
  const [cardButtonClicked, setCardButtonClicked] = useState(false)
  const codButtonRef = useRef()
  const stripe = useStripe()
  const elements = useElements()
  let totalPrice = 0
  const navigate = useNavigate()
  const codButtonHandler = () => {
    setCodButtonClicked(true)
    setCardButtonClicked(false)
  }
  const cardButtonHandler = () => {
    setCardButtonClicked(true)
    setCodButtonClicked(false)
  }
  const placeOrderButtonHandler = async () => {
    if(basketItems.length > 0){
      dispatch(udpatePurchasesStart())
      dispatch(setBasketItems([]))
      dispatch(setTotalCountStart())
      updateBasketFieldOfUser(currentUser, {})
      if(cardButtonClicked){
        if(!stripe || !elements){
          return;
        }
        try{
          const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: totalPrice })
          }).then(res => res.json())
        }
        catch(err){
          console.log(err)
        }
        
      }
      navigate('/')
    }
  }
  useEffect(() => {
    codButtonRef.current.click()
    isBurgerOpen && dispatch(setBurgerIsOpen(false))
    dispatch(setSearchItems(basketItems))
  },[])
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
          searchItems.map((item) => 
              <CheckoutItem key={item.id} item={item}/>
            )
        }
        </CheckoutItemsContainer>
        <TotalPriceContainer>
          <TotalPriceLabel>Total price: P
          {
            basketItems.length > 0 ? (
              totalPrice = basketItems.reduce((total, basketItem) => 
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
              {
                codButtonClicked ? 
                  <PaymentOptionButtonHighlighted ref={codButtonRef} onClick={() => codButtonHandler()}>Cash on delivery</PaymentOptionButtonHighlighted>
                :
                  <PaymentOptionButton ref={codButtonRef} onClick={() => codButtonHandler()}>Cash on delivery</PaymentOptionButton>
              }
              {
                cardButtonClicked ? 
                  <PaymentOptionButtonHighlighted onClick={() => cardButtonHandler()}>Credit/Debit Card</PaymentOptionButtonHighlighted>
                :
                  <PaymentOptionButton onClick={() => cardButtonHandler()}>Credit/Debit Card</PaymentOptionButton>
              }
              </PaymentOptionsContainer>
              {
                !cardButtonClicked ? <Address/> : <CardElement/>
              }
            </PaymentMethodContainer>
          </PaymentMethodParentContainer>
          <PlaceOrderContainer>
            <PlaceOrderButton onClick={() => placeOrderButtonHandler()}>Place order</PlaceOrderButton>
          </PlaceOrderContainer>
        </CheckoutPaymentAndPlaceOrderContainer>
        <DisclaimerContainer>
          <DisclaimerLabel>
              *Disclaimer: This is a demo project, no amount will be taken. All products ordered will automatically be stored in 'My purchases'. Payment through credit/debit card(Stripe) will only be stored as test data.
          </DisclaimerLabel>
        </DisclaimerContainer>
      </CheckoutPageContainer>
    </CheckoutPageParentContainer>
  )
}

export default Checkout;