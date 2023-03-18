import { 
  SignInContainer, SignInContent, HeaderContainer, FirstHeader, SecondHeader, UserFormContainer, UserInputContainer, EmailLabel, CredentialInput, PasswordInputContainer,  PasswordLabel, ButtonContainer, EmailInputContainer, SignInButton, SignInWithGoogleButton
} from "./sign-in.styles";

const SignIn = () => {
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
        <UserFormContainer>
          <UserInputContainer>
            <EmailInputContainer>
              <EmailLabel>
                Email
              </EmailLabel>
              <CredentialInput type='email'>
              </CredentialInput>
            </EmailInputContainer>
            <PasswordInputContainer>
              <PasswordLabel>
                Password
              </PasswordLabel>
              <CredentialInput type='password'>
              </CredentialInput>
            </PasswordInputContainer>
          </UserInputContainer>
          <ButtonContainer>
            <SignInButton type='submit'>SIGN IN</SignInButton>
            <SignInWithGoogleButton>SIGN IN WITH GOOGLE</SignInWithGoogleButton>
          </ButtonContainer>
        </UserFormContainer>
      </SignInContent>
    </SignInContainer>
  )
}

export default SignIn;