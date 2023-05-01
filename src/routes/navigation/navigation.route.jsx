import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Search from '../../components/searchbox/searchbox.component'
import { 
  NavigationContainer, 
  UserNavigationContainer, 
  BasketContainer, 
  MyPurchasesLabel, 
  SignInSignOutLabel, 
  ParentNavigationContainer,
  TotalProductCount,
  TotalProductContainer,
  MyPurchasesContainer,
  PurchasesNotification,
  PurchasesNotificationContainer,
  SearchBoxContainer,
  BasketSVGContainer,
  MiddleNavigationContainer
} from "./navigation.styles";
import { Fragment, useEffect, useState } from "react";
import Logo from "../../components/logo/logo.component";
import LowerNavigationContainer from "../../components/lower-navigation-div/lower-navigation-container.component";
import Burger from "../../components/burger/burger.component";
import BasketDropdown from "../../components/basket-dropdown/basket-dropdown.component";
import { Basket } from "./navigation.styles";
import { selectCurrentUser, selectFail } from "../../store/user/user.selector";
import { setBasketItems, setIsBasketOpen, setTotalCountStart } from "../../store/basket/basket.action";
import { selectIsCartOpen, selectTotalProductCount } from "../../store/basket/basket.selector";
import { signOutStart } from "../../store/user/user.action";
import BurgerMenu from "../../components/burger-menu/burger-menu.component";
import { selectIsOpenBurger } from "../../store/burger/burger.selector";
import { setBurgerIsOpen } from "../../store/burger/burger.action";
import { selectNotificationCount } from "../../store/purchases/purchases.selector";
import ProductNavigation from "../../components/product-navigation/product-navigation.component";
import { selectProductsMap } from "../../store/products/products.selector";
import { AnimatePresence } from "framer-motion";
import { setPurchases } from "../../store/purchases/purchases.action";
import Popup from "../../components/popup/popup.component";
import { setShowPopup } from "../../store/popup/popup.action";
import { selectPopupIsShown } from "../../store/popup/popup.selector";

const DEVICE_WIDTH = {
  phoneWidth: '670',
  tabletWidth: '1080'
}

const Navigation = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectProductsMap)
  const notificationCount = useSelector(selectNotificationCount)
  const isBasketOpen = useSelector(selectIsCartOpen)
  const currentUser = useSelector(selectCurrentUser)
  const totalProductCount = useSelector(selectTotalProductCount)
  const location = useLocation()
  const isBurgerOpen = useSelector(selectIsOpenBurger)
  const [cursorState, setCursorState] = useState('pointer')
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const selectFailAttempt = useSelector(selectFail)
  const selectShowPopup = useSelector(selectPopupIsShown)
  const displayName = currentUser && currentUser.displayName
  
  const toggleBasket = () => dispatch(setIsBasketOpen(!isBasketOpen))
  const signOutHandler = () => {
    dispatch(setBasketItems([]))
    dispatch(setTotalCountStart())
    dispatch(setPurchases([]))
    dispatch(signOutStart())
  }
  const burgerHandler = () => {
    dispatch(setBurgerIsOpen(!isBurgerOpen))
  }
  const resizeHandler = () => {
    setWindowSize(window.innerWidth)
  }
  
  const showPopup = () => {
    if(currentUser){
      dispatch(setShowPopup(true))
      setTimeout(() => {
        dispatch(setShowPopup(false))
      }, 2500);
    }
  }

  useEffect(() => {
    showPopup()
  },[currentUser])

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler)
  })

  useEffect(() => {
    location.pathname === '/' ? setCursorState('default') : setCursorState('pointer')
  },[location.pathname])

  useEffect(() => {
    isBasketOpen && dispatch(setIsBasketOpen(false))
  },[location.pathname])
  return (
    <Fragment>
      <AnimatePresence>
        {
          currentUser && selectShowPopup ?
            <Popup message={displayName} custom={true} user={currentUser} buy={false}/>
          :
          selectFailAttempt && selectFailAttempt.hasOwnProperty('code') && location.pathname === '/auth' ? <Popup message={selectFailAttempt} custom={false}/>
          :
          selectShowPopup && <Popup message='You need to login before you can buy' custom={true} buy={true}/>
        }
      </AnimatePresence>
      <ParentNavigationContainer location={location.pathname}>
        <NavigationContainer>
          {
            currentUser && location.pathname !== '/auth' &&
            windowSize <= DEVICE_WIDTH.phoneWidth && 
              <Fragment>
                <Burger onClick={() => burgerHandler()} displayed={isBurgerOpen} notification={notificationCount}/>
                <AnimatePresence>
                  {
                    isBurgerOpen && 
                    <BurgerMenu/>
                  }
                </AnimatePresence>
              </Fragment>
          }
          <Logo to='/' location={location.pathname} cursor={cursorState}/>
          {
            location.pathname !== '/auth' &&
            <Fragment>
              {
                location.pathname === '/' &&
                (
                  windowSize >= DEVICE_WIDTH.tabletWidth && 
                  <MiddleNavigationContainer>
                    <SearchBoxContainer>
                      <Search placeholder='Search for a craving' items={products} location='/'/>
                    </SearchBoxContainer>
                    <ProductNavigation/>
                  </MiddleNavigationContainer>
                )
              }
              <UserNavigationContainer>
              {
                windowSize > DEVICE_WIDTH.phoneWidth ? 
                (
                  currentUser ?
                  (
                    <Fragment>
                      {
                        location.pathname !== '/myPurchases' && (
                          <MyPurchasesContainer>
                            {
                              notificationCount > 0 &&
                              <PurchasesNotificationContainer>
                                <PurchasesNotification>{notificationCount}</PurchasesNotification>
                              </PurchasesNotificationContainer>
                            }
                            <MyPurchasesLabel to='/myPurchases'>MY PURCHASES</MyPurchasesLabel>
                          </MyPurchasesContainer>
                          )
                      }
                      <SignInSignOutLabel to='/' onClick={signOutHandler}>SIGN OUT
                      </SignInSignOutLabel>
                    </Fragment>
                  ):(
                    <SignInSignOutLabel to='/auth'>SIGN IN</SignInSignOutLabel>
                  )
                ):(
                  !currentUser && <SignInSignOutLabel to='/auth'>SIGN IN</SignInSignOutLabel>
                )
              }
              {
                currentUser && (
                  location.pathname !== '/checkout' && (
                    <BasketContainer>
                      <BasketSVGContainer onClick={toggleBasket}>
                        <Basket/>
                      </BasketSVGContainer>
                      <TotalProductContainer onClick={toggleBasket}>
                        <TotalProductCount>{totalProductCount}</TotalProductCount>
                      </TotalProductContainer>
                      <AnimatePresence>
                        {isBasketOpen && <BasketDropdown/>}
                      </AnimatePresence>
                    </BasketContainer>
                  )
                )
              }
              </UserNavigationContainer>
            </Fragment>
          }
        </NavigationContainer>
        {
            windowSize < DEVICE_WIDTH.tabletWidth && location.pathname === '/' && 
            <LowerNavigationContainer />
        }
      </ParentNavigationContainer>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation;