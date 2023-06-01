import { ContentContainer, LinkAddressContainer, MenuItemLabel, ParentContentContainer, ParentMenuContainer } from "./burger-menu.styles"
import { useDispatch, useSelector } from "react-redux"
import { setBurgerIsOpen } from "../../store/burger/burger.action"
import { signOutStart } from "../../store/user/user.action"
import { useLocation } from "react-router-dom"
import { selectNotificationCount } from "../../store/purchases/purchases.selector"
import { setBasketItems, setTotalCountStart } from "../../store/basket/basket.action"
import { setPurchases, setPurchasesNotificationToZero } from "../../store/purchases/purchases.action"

const BurgerMenu = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const notification = useSelector(selectNotificationCount)
  const signOutHandler = () => {
    dispatch(setBasketItems([]))
    dispatch(setTotalCountStart())
    dispatch(setPurchases([]))
    dispatch(setPurchasesNotificationToZero())
    dispatch(signOutStart())
    backHandler()
  }
  const backHandler = () => {
    dispatch(setBurgerIsOpen(false))
  }
  return (
    <ParentMenuContainer>
      <ParentContentContainer>
        <ContentContainer>
          <LinkAddressContainer>
            {
              location.pathname !== '/' &&
              <MenuItemLabel to='/' onClick={() => backHandler()}>Home</MenuItemLabel>
            }
            {
              location.pathname !== '/checkout' &&
              <MenuItemLabel to='/checkout' onClick={() => backHandler()}>Checkout</MenuItemLabel>
            }
            {
              location.pathname !== '/myPurchases' &&
              <MenuItemLabel to='/myPurchases' onClick={() => backHandler()} mypurchases notification={notification}>My purchases</MenuItemLabel>
            }
            <MenuItemLabel onClick={signOutHandler} to='/'>Sign Out</MenuItemLabel>
          </LinkAddressContainer>
        </ContentContainer>
      </ParentContentContainer>
    </ParentMenuContainer>
  )
}

export default BurgerMenu