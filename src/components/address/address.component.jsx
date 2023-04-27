import { useEffect, useRef, useState } from "react"
import { DeliveryAddressContainer, DeliveryInputArea, EditSaveAddressButton } from "./address.styles"
import { useDispatch, useSelector } from "react-redux"
import { selectCurrentUser, selectUserAddress } from "../../store/user/user.selector"
import { editUserAddressStart } from "../../store/user/user.action"

const Address = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const [address, setAddress] = useState(currentUser.address)
  const [editState, setEditState] = useState(false)
  const editAddressOnClickHandler = () => {
    setEditState(true)
  }
  const saveAddressOnClickHandler = () => {
    dispatch(editUserAddressStart(address, currentUser))
    setEditState(false)
  }
  const addressOnChangeHandler = (e) => {
    setAddress(e.target.value)
  }
  return(
    <DeliveryAddressContainer>
      <DeliveryInputArea value={address} disabled={!editState} onChange={(e) => addressOnChangeHandler(e)}></DeliveryInputArea>
      {
        editState ? 
          <EditSaveAddressButton onClick={() => saveAddressOnClickHandler()}>Save</EditSaveAddressButton>
        :
          <EditSaveAddressButton onClick={() => editAddressOnClickHandler()}>Edit</EditSaveAddressButton>
      }
    </DeliveryAddressContainer>
  )
}

export default Address