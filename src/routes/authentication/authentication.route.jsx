import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { AuthenticationContainer, ContentContainer } from "./authentication.styles";
const Authentication = () => {
  return (
    <AuthenticationContainer>
      <ContentContainer>
        <SignIn/>
        <SignUp/>
      </ContentContainer>
    </AuthenticationContainer>
  )
}

export default Authentication;