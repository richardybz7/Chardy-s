import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as BasketSVG } from '../../assets/chardybasket.svg'

export const MyPurchasesLabel = styled(Link)`
  white-space: nowrap;
  text-decoration: none;
  color: #FF6161;
  transition: 0.3s ease-in-out;
  transform-origin: bottom;
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
  transform-origin: bottom;
  :hover{
    transform: scale(1.05);
    color: #E961FF
  }
`
export const BasketContainer = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
`
export const Basket = styled(BasketSVG)`
  cursor: pointer;
`
export const UserNavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  gap: 3em;
  font-size: 0.75rem;
`
export const TotalProductContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 40px;
  cursor: pointer;
  bottom: 17px;
  right: 36px;
  @media screen and (max-width: 768px) {
    bottom: 63px;
  }
`
export const TotalProductCount = styled.div`
  position: relative
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
  z-index: 10;
`