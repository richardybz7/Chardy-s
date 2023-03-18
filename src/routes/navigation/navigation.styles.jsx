import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BaseSearchBoxFormContainer } from '../../components/searchbox/searchbox.styles';
import { BaseUserNavigationContainer } from '../../components/userNavigation/user-navigation.styles';
export const NavigationContainer = styled.div`
  display: flex;
  padding: 0.8em 2em;
  justify-content: space-around;
  align-items: center;
  gap: 5em;
`
export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  width: 10rem;
`
export const SearchBoxFormContainer = styled(BaseSearchBoxFormContainer)`
  padding: 5px 10px 5px 15px;
  flex-grow: 5;
`
export const SearchBox = styled.input`
  border: none;
  background-color: #FAFAFA;
  width: 100%;
  :focus{
    outline: none;
  }
`
export const SearchButton = styled(Link)`
  border: none;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
`
export const MyPurchasesContainer = styled.div`

`
export const CartDropdownContainer = styled(Link)`

`
export const UserNavigationContainer = styled(BaseUserNavigationContainer)`
  gap: 3em;
`
export const BasketContainer = styled(Link)`
  display: flex;
  align-items: center;
`
