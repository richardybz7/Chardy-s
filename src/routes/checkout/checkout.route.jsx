import { useDispatch, useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Search from "../../components/searchbox/searchbox.component";
import { ActionsHeaderLabel, CheckoutItemsContainer, CheckoutLabel, CheckoutPageContainer, CheckoutPageParentContainer, CheckoutPaymentAndPlaceOrderContainer, PaymentOptionButton, DeliveryAddressContainer, DeliveryInputArea, DetailsAndActionHeaderContainer, EditSaveAddressButton, ListHeaderContainer, ListHeaderParentContainer, PaymentMethodContainer, PaymentMethodLabel, PaymentMethodLabelContainer, PaymentMethodParentContainer, PaymentOptionsContainer, PlaceOrderButton, PlaceOrderContainer, QuantityHeaderLabel, SearchBoxContainer, TotalItemPriceHeaderLabel, TotalPriceContainer, TotalPriceLabel, UnitPriceHeaderLabel, PaymentOptionButtonHighlighted } from "./checkout.styles";
import { Fragment, useEffect, useRef, useState } from "react";
import { selectBasketItems, selectSearchItems } from "../../store/basket/basket.selector";
import { setBasketItems, setTotalCountStart } from "../../store/basket/basket.action";
import { udpatePurchasesStart } from "../../store/purchases/purchases.action";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import { updateBasketFieldOfUser } from "../../utils/firebase/firebase.utils";
import Address from "../../components/address/address.component";
import { setBurgerIsOpen } from "../../store/burger/burger.action";
import { selectIsOpenBurger } from "../../store/burger/burger.selector";

const Checkout = () => {
  const dispatch = useDispatch()
  const isBurgerOpen = useSelector(selectIsOpenBurger)
  const basketItems = useSelector(selectBasketItems)
  const searchItems = useSelector(selectSearchItems)
  const currentUser = useSelector(selectCurrentUser)
  const [codButtonClicked, setCodButtonClicked] = useState(false)
  const [cardButtonClicked, setCardButtonClicked] = useState(false)
  const codButtonRef = useRef()
  const navigate = useNavigate()
  const codButtonHandler = () => {
    setCodButtonClicked(true)
    setCardButtonClicked(false)
  }
  const cardButtonHandler = () => {
    setCardButtonClicked(true)
    setCodButtonClicked(false)
  }
  const placeOrderButtonHandler = () => {
    if(basketItems.length){
      dispatch(udpatePurchasesStart())
      dispatch(setBasketItems([]))
      dispatch(setTotalCountStart())
      updateBasketFieldOfUser(currentUser, {})
      navigate('/')
    }
  }
  useEffect(() => {
    codButtonRef.current.click()
    isBurgerOpen && dispatch(setBurgerIsOpen(false))
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
          searchItems.length > 0 ? (
            searchItems.map((item) => 
              !(item.count === 0 && item.dozenCount === 0) &&
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
            basketItems.length > 0 ? (
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
              <Address/>
            </PaymentMethodContainer>
          </PaymentMethodParentContainer>
          <PlaceOrderContainer>
            <PlaceOrderButton onClick={() => placeOrderButtonHandler()}>Place order</PlaceOrderButton>
          </PlaceOrderContainer>
        </CheckoutPaymentAndPlaceOrderContainer>
      </CheckoutPageContainer>
    </CheckoutPageParentContainer>
  )
}

export default Checkout;