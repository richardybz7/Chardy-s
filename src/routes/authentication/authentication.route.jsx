import { useEffect } from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { AuthenticationContainer, ContentContainer } from "./authentication.styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
const Authentication = () => {
  const currentUser = useSelector(selectCurrentUser)
  const navigate = useNavigate()
  useEffect(() => {
    currentUser && navigate('/')
  },[currentUser])
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