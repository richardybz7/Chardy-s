import { Outlet, useLocation } from "react-router-dom";
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
  TotalProductContainer
} from "./navigation.styles";
import { useEffect, useState } from "react";
import Logo from "../../components/logo/logo.component";
import LowerNavigationContainer from "../../components/lower-navigation-div/lower-navigation-container.component";
import Burger from "../../components/burger/burger.component";
import BasketDropdown from "../../components/basket-dropdown/basket-dropdown.component";
import { Basket } from "./navigation.styles";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { setIsBasketOpen } from "../../store/basket/basket.action";
import { selectIsCartOpen, selectTotalProductCount } from "../../store/basket/basket.selector";

const DEVICE_WIDTH = {
  phoneWidth: '500',
  tabletWidth: '768'
}

const Navigation = () => {
  const dispatch = useDispatch()
  const isBasketOpen = useSelector(selectIsCartOpen)
  const currentUser = useSelector(selectCurrentUser)
  const totalProductCount = useSelector(selectTotalProductCount)
  const location = useLocation();
  const [cursorState, setCursorState] = useState('pointer');
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const toggleBasket = () => dispatch(setIsBasketOpen(!isBasketOpen))
  const resizeHandler = () => {
    setWindowSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler)
  })

  useEffect(() => {
    location.pathname === '/' ? setCursorState('default') : setCursorState('pointer')
  },[location.pathname])
  
  const signOutHandler = () => {
    signOutUser();
    alert('You just signed out')
  }
  return (
    <>
      <ParentNavigationContainer>
        <NavigationContainer>
          {
            windowSize <= DEVICE_WIDTH.phoneWidth ? 
            <Burger/>
            :
            <></>
          }
          <Logo to='/' location={location.pathname} cursor={cursorState}/>
          {
            location.pathname === '/auth' ? 
            <></>
            :
            <>
              {
                windowSize >= DEVICE_WIDTH.tabletWidth ? 
                  <Search/>
                  :
                  <></>
              }
              <UserNavigationContainer>
              {
                windowSize <= DEVICE_WIDTH.phoneWidth ? 
                <></>
                :
                <>
                  {
                    currentUser ? 
                    (
                      <>
                        <MyPurchasesLabel to='/myPurchases'>MY PURCHASES
                        </MyPurchasesLabel>
                        <SignInSignOutLabel to='/' onClick={signOutHandler}>SIGN OUT
                        </SignInSignOutLabel>
                      </>
                    )
                    :
                    <SignInSignOutLabel to='/auth'>SIGN IN
                    </SignInSignOutLabel>

                  }
                </>
                
              }
              <BasketContainer>
                <Basket onClick={toggleBasket}/>
                <TotalProductContainer onClick={toggleBasket}>
                  <TotalProductCount>{totalProductCount}</TotalProductCount>
                </TotalProductContainer>
                {isBasketOpen && <BasketDropdown/>}
              </BasketContainer>
            </UserNavigationContainer>
            </>
          }
        </NavigationContainer>
        {
          windowSize < DEVICE_WIDTH.tabletWidth && location.pathname === '/' ? 
          <LowerNavigationContainer />
          :
          <></>
        }
      </ParentNavigationContainer>
      <Outlet/>
    </>
  )
}

export default Navigation;