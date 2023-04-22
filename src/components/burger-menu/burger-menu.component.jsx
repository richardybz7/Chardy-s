import { AddressContainer, BackIcon, ContentContainer, HeaderContainer, HeaderContent, HeaderLabel, LinkAddressContainer, MenuItemLabel, ParentContentContainer, ParentMenuContainer } from "./burger-menu.styles"
import Address from "../address/address.component"
import { useDispatch, useSelector } from "react-redux"
import { setBurgerIsOpen } from "../../store/burger/burger.action"
import { signOutStart } from "../../store/user/user.action"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import ReactModal from "react-modal"
import { selectNotificationCount } from "../../store/purchases/purchases.selector"

const BurgerMenu = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const notification = useSelector(selectNotificationCount)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const signOutHandler = () => {
    if(location.pathname !== '/'){
      dispatch(signOutStart())
      navigate('/')
    }
    else{
      dispatch(signOutStart())
    }
    backHandler()
  }
  const backHandler = () => {
    dispatch(setBurgerIsOpen(false))
  }
  const openModal = () => {
    setModalIsOpen(true)
  }
  const closeModal = () => {
    setModalIsOpen(false)
  }
  const modalStyle = {
    overlay:{
      zIndex: '999'
    }, 
    content:{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width:'max-content',
      height: 'max-content',
      display: 'flex'
    }
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
              <MenuItemLabel to='/myPurchases' onClick={() => backHandler()} myPurchases={true} notification={notification}>My purchases</MenuItemLabel>
            }
            <MenuItemLabel onClick={openModal}>Address</MenuItemLabel>
            <MenuItemLabel onClick={signOutHandler}>Sign Out</MenuItemLabel>
          </LinkAddressContainer>
        </ContentContainer>
      </ParentContentContainer>
      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyle}>
        <Address/>
        <button onClick={closeModal} style={{'height':'max-content'}}>X</button>
      </ReactModal>
    </ParentMenuContainer>
  )
}

export default BurgerMenu