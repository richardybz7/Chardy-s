import styled from "styled-components";
import { BaseButton } from "../button/button.styles";

export const SignUpContainer = styled.div`
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
  width: 25rem;
  gap: 1.5em;
`
export const UserInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  font-size: 0.8rem;
`
export const DisplayNameContainer = styled.div`

`
export const DisplayNameLabel = styled.div`
  margin-bottom: var(--margin-bottom);
`
export const EmailInputContainer = styled.div`

`
export const EmailLabel = styled.div`
  margin-bottom: var(--margin-bottom)
`
export const CredentialInput = styled.input`
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
export const ConfirmPasswordContainer = styled.div`
`
export const ConfirmPasswordLabel = styled.div`
  margin-bottom: var(--margin-bottom)
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const SignUpButton = styled(BaseButton)`
  background-color: #FFBBBB;
  border-radius: var(--border-radius);
  color: #523131;
  width: 8em;
  transition: 0.3s ease-in-out;
  &:hover{
    background-color: #FFCBCB;
    color: #FFFFFF;
  }
`
export const SignUpContent = styled.div`
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