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
import { Fragment, useEffect, useState } from "react";
import Logo from "../../components/logo/logo.component";
import LowerNavigationContainer from "../../components/lower-navigation-div/lower-navigation-container.component";
import Burger from "../../components/burger/burger.component";
import BasketDropdown from "../../components/basket-dropdown/basket-dropdown.component";
import { Basket } from "./navigation.styles";
import { selectCurrentUser, selectIsLoading } from "../../store/user/user.selector";
import { setIsBasketOpen } from "../../store/basket/basket.action";
import { selectBasketItems, selectIsCartOpen, selectTotalProductCount } from "../../store/basket/basket.selector";
import Spinner from "../../components/spinner/spinner.component";
import { signOutStart } from "../../store/user/user.action";

const DEVICE_WIDTH = {
  phoneWidth: '500',
  tabletWidth: '768'
}

const Navigation = () => {
  const dispatch = useDispatch()
  const isBasketOpen = useSelector(selectIsCartOpen)
  const currentUser = useSelector(selectCurrentUser)
  const basketItems = useSelector(selectBasketItems)
  const totalProductCount = useSelector(selectTotalProductCount)
  const location = useLocation();
  const isLoading = useSelector(selectIsLoading)
  const [cursorState, setCursorState] = useState('pointer');
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const toggleBasket = () => dispatch(setIsBasketOpen(!isBasketOpen))
  const signOutHandler = () => {
    dispatch(signOutStart())
  }
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
  
  

  return (
    <Fragment>
    {
      isLoading ? 
      (
        <Spinner/>
      )
      :(
        <Fragment>
        <ParentNavigationContainer>
          <NavigationContainer>
            {
              windowSize <= DEVICE_WIDTH.phoneWidth ? 
              <Burger/>
              :
              <Fragment/>
            }
            <Logo to='/' location={location.pathname} cursor={cursorState}/>
            {
              location.pathname === '/auth' ? 
              <Fragment/>
              :
              <Fragment>
                {
                  windowSize >= DEVICE_WIDTH.tabletWidth ? 
                    <Search/>
                    :
                    <Fragment/>
                }
                <UserNavigationContainer>
                {
                  windowSize <= DEVICE_WIDTH.phoneWidth ? 
                  <Fragment/>
                  :
                  <Fragment>
                    {
                      currentUser ? 
                      (
                        <Fragment>
                          <MyPurchasesLabel to='/myPurchases'>MY PURCHASES
                          </MyPurchasesLabel>
                          <SignInSignOutLabel to='/' onClick={signOutHandler}>SIGN OUT
                          </SignInSignOutLabel>
                        </Fragment>
                      )
                      :
                      <SignInSignOutLabel to='/auth'>SIGN IN
                      </SignInSignOutLabel>

                    }
                  </Fragment>
                  
                }
                <BasketContainer>
                  <Basket onClick={toggleBasket}/>
                  <TotalProductContainer onClick={toggleBasket}>
                    <TotalProductCount>{totalProductCount}</TotalProductCount>
                  </TotalProductContainer>
                  {isBasketOpen && <BasketDropdown/>}
                </BasketContainer>
              </UserNavigationContainer>
              </Fragment>
            }
          </NavigationContainer>
          {
            windowSize < DEVICE_WIDTH.tabletWidth && location.pathname === '/' ? 
            <LowerNavigationContainer />
            :
            <Fragment/>
          }
        </ParentNavigationContainer>
        <Outlet/>
        </Fragment>
      )
    }
    </Fragment>
  )
}

export default Navigation;