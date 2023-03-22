import { 
  SignUpContainer, SignUpContent, HeaderContainer, FirstHeader, SecondHeader, UserFormContainer, UserInputContainer, DisplayNameContainer, DisplayNameLabel, EmailLabel, CredentialInput, PasswordInputContainer,  PasswordLabel, ConfirmPasswordContainer, ConfirmPasswordLabel, ButtonContainer, EmailInputContainer, SignUpButton
} from "./sign-up.styles";
import { createUserAuthWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate()
  const displayNameRef = useRef('')
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const confirmPasswordRef = useRef('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if(passwordRef.current.value !== confirmPasswordRef.current.value){
      alert('Passwords do not match')
      return
    }
    try{
      const {user} = await createUserAuthWithEmailAndPassword(
        emailRef.current.value, 
        passwordRef.current.value
        )
      const displayName = displayNameRef.current.value
      await createUserDocumentFromAuth(user, {displayName})
      navigate('/')
    }
    catch(err){
      switch(err.code){
        case 'auth/email-already-in-use':
          alert('Email already used')
      }
    }
  }
  return (
    <SignUpContainer>
      <SignUpContent>
        <HeaderContainer>
          <FirstHeader>
            Don't have an account?
          </FirstHeader>
          <SecondHeader>
            Sign up with you email and password
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