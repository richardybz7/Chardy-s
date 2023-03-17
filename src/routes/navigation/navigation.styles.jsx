import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 30px;
  justify-content: space-between;
  align-items: center;
`

export const SearchBoxContainer = styled.div`
  border: 1px solid red;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 5px 10px 5px 15px;
  width: 50em
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
  background-color: #FAFAFA;
  display: flex;
  align-items: center;
`

export const MyPurchasesContainer = styled.div`

`

export const CartDropdownContainer = styled(Link)`

`

export const UserNavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5em;
  align-items: center;
`
export const BasketLink = styled(Link)`

`
