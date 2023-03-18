import { 
  SignUpContainer, SignUpContent, HeaderContainer, FirstHeader, SecondHeader, UserFormContainer, UserInputContainer, DisplayNameContainer, DisplayNameLabel, EmailLabel, CredentialInput, PasswordInputContainer,  PasswordLabel, ConfirmPasswordContainer, ConfirmPasswordLabel, ButtonContainer, EmailInputContainer, SignUpButton
} from "./sign-up.styles";

const SignUp = () => {
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
        <UserFormContainer>
          <UserInputContainer>
            <DisplayNameContainer>
              <DisplayNameLabel>
                Display name
              </DisplayNameLabel>
              <CredentialInput>
              </CredentialInput>
            </DisplayNameContainer>
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
              <CredentialInput className="password" type='password'>
              </CredentialInput>
            </PasswordInputContainer>
            <ConfirmPasswordContainer>
              <ConfirmPasswordLabel>
                Confirm password
              </ConfirmPasswordLabel>
              <CredentialInput className='confirmPassword' type='password'>
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