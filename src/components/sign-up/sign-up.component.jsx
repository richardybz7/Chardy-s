import { 
  SignUpContainer, SignUpContent, HeaderContainer, FirstHeader, SecondHeader, UserFormContainer, UserInputContainer, DisplayNameContainer, DisplayNameLabel, EmailLabel, CredentialInput, PasswordInputContainer,  PasswordLabel, ConfirmPasswordContainer, ConfirmPasswordLabel, ButtonContainer, EmailInputContainer, SignUpButton
} from "./sign-up.styles";
import { createUserAuthWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { signUpFailed, signUpStart } from "../../store/user/user.action";
const SignUp = () => {
  const dispatch = useDispatch()
  const displayNameRef = useRef('')
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const confirmPasswordRef = useRef('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if(passwordRef.current.value !== confirmPasswordRef.current.value){
      dispatch(signUpFailed('Passwords do not match!'))
      return
    }
    dispatch(signUpStart(
      emailRef.current.value, 
      passwordRef.current.value,
      displayNameRef.current.value
    ))
  }
  return (
    <SignUpContainer>
      <SignUpContent>
        <HeaderContainer>
          <FirstHeader>
            Don't have an account?
          </FirstHeader>
          <SecondHeader>
            Sign up with your email and password
          </SecondHeader>
        </HeaderContainer>
        <UserFormContainer onSubmit={onSubmitHandler}>
          <UserInputContainer>
            <DisplayNameContainer>
              <DisplayNameLabel>
                Display name
              </DisplayNameLabel>
              <CredentialInput ref={displayNameRef} required>
              </CredentialInput>
            </DisplayNameContainer>
            <EmailInputContainer>
              <EmailLabel>
                Email
              </EmailLabel>
              <CredentialInput type='email' ref={emailRef} required>
              </CredentialInput>
            </EmailInputContainer>
            <PasswordInputContainer>
              <PasswordLabel>
                Password
              </PasswordLabel>
              <CredentialInput className="password" ref={passwordRef} type='password' required>
              </CredentialInput>
            </PasswordInputContainer>
            <ConfirmPasswordContainer>
              <ConfirmPasswordLabel>
                Confirm password
              </ConfirmPasswordLabel>
              <CredentialInput className='confirmPassword' ref={confirmPasswordRef} type='password' required>
              </CredentialInput>
            </ConfirmPasswordContainer>
          </UserInputContainer>
          <ButtonContainer>
            <SignUpButton type='submit'>SIGN UP</SignUpButton>
          </ButtonContainer>
        </UserFormContainer>
      </SignUpContent>
    </SignUpContainer>
  )
}

export default SignUp;