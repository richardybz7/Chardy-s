import { AddressContainer, BackIcon, ContentContainer, HeaderContainer, HeaderContent, HeaderLabel, LinkAddressContainer, MenuItemLabel, ParentContentContainer, ParentMenuContainer } from "./burger-menu.styles"
import Address from "../address/address.component"
import { useDispatch } from "react-redux"
import { setBurgerIsOpen } from "../../store/burger/burger.action"

const BurgerMenu = ({focus}) => {
  const dispatch = useDispatch()
  const backHandler = () => {
    dispatch(setBurgerIsOpen(false))
  }
  return (
    <ParentMenuContainer>
      <HeaderContainer onClick={() => backHandler()}>
        <HeaderContent>
          <BackIcon/>
          <HeaderLabel>Back</HeaderLabel>
        </HeaderContent>
      </HeaderContainer>
      <ParentContentContainer>
        <ContentContainer>
          <MenuItemLabel product="true" onClick={e => focus(e)}>New</MenuItemLabel>
          <MenuItemLabel product="true" onClick={e => focus(e)}>Best sellers</MenuItemLabel>
          <MenuItemLabel product="true" onClick={e => focus(e)}>Classics</MenuItemLabel>
          <MenuItemLabel product="true" onClick={e => focus(e)}>Drinks</MenuItemLabel>
          <LinkAddressContainer>
            <MenuItemLabel>Checkout</MenuItemLabel>
            <MenuItemLabel>My purchases</MenuItemLabel>
            <AddressContainer>
              <MenuItemLabel address="true">Address</MenuItemLabel>
              <Address/>
            </AddressContainer>
          </LinkAddressContainer>
        </ContentContainer>
      </ParentContentContainer>
    </ParentMenuContainer>
  )
}

export default BurgerMenu