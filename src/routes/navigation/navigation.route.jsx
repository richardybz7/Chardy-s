import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from '../../components/searchbox/searchbox.component'
import { 
  NavigationContainer, LogoContainer, SearchBoxFormContainer, SearchBox, MyPurchasesContainer, CartDropdownContainer, SearchButton, UserNavigationContainer, BasketContainer, MyPurchasesLabel, SignInSignOutLabel, ParentNavigationContainer
} from "./navigation.styles";
import { useEffect, useState } from "react";
import Logo from "../../components/logo/logo.component";
import LowerNavigationContainer from "../../components/lower-navigation-div/lower-navigation-container.component";
import Burger from "../../components/burger/burger.component";
import BasketDropdown from "../../components/basket-dropdown/basket-dropdown.component";
import { ReactComponent as BasketSVG } from '../../assets/chardybasket.svg'
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
const PHONE_WIDTH = {
  width: '500'
}

const searchButtonHandler = () => {
  console.log('asdfasasdf')
}

const LogoStyle = {
  padding: '0.2em 2em' 
}

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  console.log('CURRENT USER: ', currentUser)
  const location = useLocation();
  const [cursorState, setCursorState] = useState('pointer');
  const [windowSize, setWindowSize] = useState(window.innerWidth);

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
            windowSize <= PHONE_WIDTH.width ? 
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
                windowSize >= '820' ? 
                  <Search/>
                  :
                  <></>
              }
              <UserNavigationContainer>
              {
                windowSize <= PHONE_WIDTH.width ? 
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
                <BasketSVG/>
                <BasketDropdown/>
              </BasketContainer>
            </UserNavigationContainer>
            </>
          }
        </NavigationContainer>
        {
          windowSize < '820' && location.pathname === '/' ? 
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