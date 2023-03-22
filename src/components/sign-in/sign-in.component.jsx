import { 
  SignInContainer, SignInContent, HeaderContainer, FirstHeader, SecondHeader, UserFormContainer, UserInputContainer, EmailLabel, CredentialInput, PasswordInputContainer,  PasswordLabel, ButtonContainer, EmailInputContainer, SignInButton, SignInWithGoogleButton
} from "./sign-in.styles";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils.js'
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: '',
  password: ''
}

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate()
  const logGoogleUser = async () => {
    try{
      const {user} = await signInWithGooglePopup()
      const userDoc = createUserDocumentFromAuth(user)
      navigate('/')
    }
    catch(err){
      console.log('Error creating the user', err.message)
    }
  }
  const signInHandler = async (e) => {
    e.preventDefault()
    try{
      await signInAuthUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
        )
        navigate('/')
    }
    catch(err){
      switch( err.code ){
        case 'auth/user-not-found':
          alert('User not found')
          break;
        default:
          console.log(err)
      }
      console.log('Error signing in with email and password', err.message)
    }
  }
  return (
    <SignInContainer>
      <SignInContent>
        <HeaderContainer>
          <FirstHeader>
            Already have an account?
          </FirstHeader>
          <SecondHeader>
            Sign in with you email and password
          </SecondHeader>
        </HeaderContainer>
        <UserFormContainer onSubmit={signInHandler}>
          <UserInputContainer>
            <EmailInputContainer>
              <EmailLabel>
                Email
              </EmailLabel>
              <CredentialInput type='email' ref={emailRef} name='email' required>
              </CredentialInput>
            </EmailInputContainer>
            <PasswordInputContainer>
              <PasswordLabel>
                Password
              </PasswordLabel>
              <CredentialInput type='password' ref={passwordRef} name='password' required>
              </CredentialInput>
            </PasswordInputContainer>
          </UserInputContainer>
          <ButtonContainer>
            <SignInButton type='submit'>SIGN IN</SignInButton>
            <SignInWithGoogleButton onClick={logGoogleUser}>SIGN IN WITH GOOGLE</SignInWithGoogleButton>
          </ButtonContainer>
        </UserFormContainer>
      </SignInContent>
    </SignInContainer>
  )
}

export default SignIn;