import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MyPurchasesLabel = styled(Link)`
  white-space: nowrap;
  text-decoration: none;
  color: #FF6161;
  transition: 0.3s ease-in-out;
  :hover{
    transform: scale(1.05);
    color: #E961FF
  }
`
export const SignInSignOutLabel = styled(Link)`
  white-space: nowrap;
  text-decoration: none;
  color: #FF6161;
  transition: 0.3s ease-in-out;
  :hover{
    transform: scale(1.05);
    color: #E961FF
  }
`
export const BasketContainer = styled(Link)`
  width: 50px;
  display: flex;
  align-items: center;
`
export const UserNavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  gap: 3em;
  font-size: 0.75rem;
`

export const MyPurchasesContainer = styled.div`

`
export const CartDropdownContainer = styled(Link)`

`
export const NavigationContainer = styled.div`
  display: flex;
  padding: 0.2em 2em;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`
export const ParentNavigationContainer = styled.div`
  background-color: var(--background-color);
  position: sticky;
  top: 0;
`