import { useState } from "react"
import { DeliveryAddressContainer, DeliveryInputArea, EditSaveAddressButton } from "./address.styles"

const Address = () => {
  const [editState, setEditState] = useState(false)
  const [address, setAddress] = useState('Consolacion, Cebu')
  const editAddressOnClickHandler = () => {
    setEditState(true)
  }
  const saveAddressOnClickHandler = () => {
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