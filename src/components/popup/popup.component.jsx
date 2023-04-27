import { useLocation } from "react-router-dom"
import { ButtonContainer, MessageContainer, MessageLabel, PopupButton, PopupContainer, PopupParentContainer } from "./popup.styles"

const Popup = ({message, custom, currentUser, buy}) => {
  const location = useLocation()
  let newMessage = ''
  let additionalMessage = ''
  if(!custom && !currentUser){
    newMessage = message.code.replace('auth/', '')
    newMessage = newMessage.replace(/-/g, ' ')
    newMessage = newMessage.charAt(0).toUpperCase() + newMessage.slice(1) + '!'
    if(newMessage === 'Weak password!')
      additionalMessage = 'Must be atleast 6 characters'
  }
  return (
    <PopupParentContainer location={location.pathname}>
      <PopupContainer custom={custom}>
        <MessageContainer>
          {
            !custom &&
              <MessageLabel>{newMessage}</MessageLabel>
          }
          {
            custom && !currentUser && buy &&
            <MessageLabel>{`${message}!`}</MessageLabel>
          }
          {
            custom && !currentUser && !buy &&
            <MessageLabel>{`Welcome ${message}!`}</MessageLabel>
          }
          {
            newMessage === 'Weak password!' &&
            <MessageLabel>{additionalMessage}</MessageLabel>
          }
        </MessageContainer>
      </PopupContainer>
    </PopupParentContainer>
  )
}

export default Popup