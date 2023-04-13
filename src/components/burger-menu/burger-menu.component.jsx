import { AddressContainer, BackIcon, ContentContainer, HeaderContainer, HeaderContent, HeaderLabel, LinkAddressContainer, MenuItemLabel, ParentContentContainer, ParentMenuContainer } from "./burger-menu.styles"
import Address from "../address/address.component"
import { useDispatch } from "react-redux"
import { setBurgerIsOpen } from "../../store/burger/burger.action"

const BurgerMenu = () => {
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
          <LinkAddressContainer>
            <MenuItemLabel to='/checkout'>Checkout</MenuItemLabel>
            <MenuItemLabel to='/myPurchases'>My purchases</MenuItemLabel>
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