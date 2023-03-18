import styled from "styled-components";
import { BaseButton } from "../button/button.styles";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  --border-radius: 0.4em;
  --margin-bottom: 0.5em;
`
export const HeaderContainer = styled.div`
  margin-bottom: 1.7rem;
`
export const FirstHeader = styled.div`
  font-size: 2rem;
`
export const SecondHeader = styled.div`
  font-size: 1.1rem;
`
export const UserFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  width: 25rem;
`
export const UserInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  gap: 1em;
`
export const EmailInputContainer = styled.div`

`
export const EmailLabel = styled.div`
  margin-bottom: var(--margin-bottom)
`
export const CredentialInput = styled.input`
  position: relative;
  outline: #FF5B5B;
  border-radius: var(--border-radius);
  border: 1px solid gray;
  width: 100%;
  font-size: 1rem;
  box-sizing: border-box;
  padding: 0.8em;
  &:hover{
    border: 1px solid rgba(255, 91, 91, 1);
  }
`
CredentialInput.defaultProps = {
  type: "text"
}
export const PasswordInputContainer = styled.div`
`
export const PasswordLabel = styled.div`
  margin-bottom: var(--margin-bottom)
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1.5em;
`
export const SignInButton = styled(BaseButton)`
  background-color: #FFBBBB;
  border-radius: var(--border-radius);
  color: #523131;
  flex-grow: 1;
  transition: 0.3s ease-in-out;
  &:hover{
    background-color: #FFCBCB;
    color: #FFFFFF;
  }
`
export const SignInWithGoogleButton = styled(BaseButton)`
  background-color: #3F7CD8;
  border-radius: var(--border-radius);
  color: #FFFFFF;
  flex-grow: 2;
  transition: 0.3s ease-in-out;
  &:hover{
    background-color: #5490EC;
    color: #FAFAFA;
  }
`

export const SignInContent = styled.div`
  ${FirstHeader}{
    @media all and (max-width: 660px){
      font-size: 1.5rem;
    }
  }
  ${SecondHeader}{
    @media all and (max-width: 660px){
      font-size: 0.9rem;
    }
  }
  ${UserInputContainer}{
    @media all and (max-width: 660px){
      font-size: 0.8rem;
    }
  }
`