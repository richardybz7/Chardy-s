import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as SearchLogo } from '../../assets/search-lg.svg'
import { ReactComponent as Basket } from '../../assets/basket.svg'
import { 
  NavigationContainer, SearchBoxContainer, SearchBox, MyPurchasesContainer, CartDropdownContainer, SearchButton, UserNavigationContainer, BasketLink
} from "./navigation.styles";

const searchButtonHandler = () => {
  console.log('asdfasasdf')
}

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <Link to='/'>
          <Logo/>
        </Link>
        <form>
          <SearchBoxContainer>
            <SearchBox type='search' placeholder="Search a craving"></SearchBox>
            <SearchButton type='button' onClick={searchButtonHandler}>
              <SearchLogo/>
            </SearchButton>
          </SearchBoxContainer>
        </form>
        <UserNavigationContainer>
          <Link to='/myPurchases'>MY PURCHASES</Link>
          <div>SIGN OUT</div>
          <BasketLink>
            <Basket/>
          </BasketLink>
        </UserNavigationContainer>
      </NavigationContainer>
      <Outlet/>
    </>
  )
}

export default Navigation;