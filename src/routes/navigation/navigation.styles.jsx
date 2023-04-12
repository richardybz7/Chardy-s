import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as BasketSVG } from '../../assets/chardybasket2.svg'

export const MyPurchasesLabel = styled(Link)`
  white-space: nowrap;
  text-decoration: none;
  color: #FF6161;
  display: inline-block;
  transition: 0.1s ease-in-out;
  transform-origin: center;
  :hover{
    transform: scale(1.03);
    color: #E961FF
  }
`
export const SearchBoxContainer = styled.div`
  padding-right: 1em;
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
`
export const MyPurchasesContainer = styled.div`
  position: relative;
`
export const PurchasesNotificationContainer = styled.div`
  position:absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: 100%;
  padding: 2px 6px;
  background-color: #FF6161;
  border-radius: 1rem;
  right: -1rem;
  top: -1.2rem;
`
export const PurchasesNotification = styled.label`
  color: white;
`
export const SignInSignOutLabel = styled(Link)`
  white-space: nowrap;
  text-decoration: none;
  display: inline-block;
  color: #FF6161;
  transition: 0.1s ease-in-out;
  transform-origin: bottom;
  :hover{
    transform: scale(1.03);
    color: #E961FF
  }
`
export const BasketContainer = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
`
export const Basket = styled(BasketSVG)`
`
export const BasketSVGContainer = styled.div`
  cursor: pointer;
  position: absolute;
  width: 50px;
  z-index: 5;
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
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
  z-index: 6;
  width: 100%;
  height: 40px;
  &:hover{
    & > div{
      color: darkviolet;
    }
  }
  @media screen and (max-width: 767px) {
    ${props => props.displayLowerSearch && css`
      bottom: 63px;
    `}
  }
`
export const TotalProductCount = styled.div`
  font-family: 'Pacifico', cursive;
  font-size: 1.3em;
  color: peru;
`
export const NavigationContainer = styled.div`
  display: flex;
  padding: 0.2em 1.5em;
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
