import { Link, Outlet } from "react-router-dom";
import Media from "react-media";
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as SearchLogo } from '../../assets/search-lg.svg'
import { ReactComponent as Basket } from '../../assets/basket.svg'
import { 
  NavigationContainer, LogoContainer, SearchBoxFormContainer, SearchBox, MyPurchasesContainer, CartDropdownContainer, SearchButton, UserNavigationContainer, BasketContainer
} from "./navigation.styles";

const searchButtonHandler = () => {
  console.log('asdfasasdf')
}

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo/>
        </LogoContainer>
        <SearchBoxFormContainer>
          <SearchBox type='search' placeholder="Search a craving"></SearchBox>
          <SearchButton type='button' onClick={searchButtonHandler}>
            <SearchLogo/>
          </SearchButton>
        </SearchBoxFormContainer>
        <UserNavigationContainer>
          <Link to='/myPurchases'>MY PURCHASES</Link>
          <Link to='/auth'>SIGN IN</Link>
          <BasketContainer>
            <Basket/>
          </BasketContainer>
        </UserNavigationContainer>
      </NavigationContainer>
      <Outlet/>
    </>
  )
}

export default Navigation;