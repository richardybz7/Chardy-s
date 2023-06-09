import { 
  SignInContainer, SignInContent, HeaderContainer, FirstHeader, SecondHeader, UserFormContainer, UserInputContainer, EmailLabel, CredentialInput, PasswordInputContainer,  PasswordLabel, ButtonContainer, EmailInputContainer, SignInButton, SignInWithGoogleButton
} from "./sign-in.styles";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../store/user/user.action";

const SignIn = () => {
  const dispatch = useDispatch()
  const emailRef = useRef();
  const passwordRef = useRef();
  const logGoogleUser = async () => {
      dispatch(googleSignInStart())
  }
  const signInHandler = async (e) => {
    e.preventDefault()
    dispatch(emailSignInStart(
      emailRef.current.value, 
      passwordRef.current.value
    ))
  }
  return (
    <SignInContainer>
      <SignInContent>
        <HeaderContainer>
          <FirstHeader>
            Already have an account?
          </FirstHeader>
          <SecondHeader>
            Sign in with your email and password
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