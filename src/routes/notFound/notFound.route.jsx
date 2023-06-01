import { useNavigate } from "react-router-dom";
import { NotFoundClickableLabel, NotFoundContainer, NotFoundLabel, NotFoundParentContainer, NotFoundSVG } from "./notFound.styles";

const NotFound = () => {
  const navigate = useNavigate()
  const goToHomeHandler = () => {
    navigate('/')
  }
  return (
    <NotFoundParentContainer>
      <NotFoundContainer>
        <NotFoundSVG/>
        <NotFoundLabel>
          You must be lost, click&nbsp;<NotFoundClickableLabel onClick={goToHomeHandler}>here</NotFoundClickableLabel>&nbsp;to go to home
        </NotFoundLabel>
      </NotFoundContainer>
    </NotFoundParentContainer>
  )
}

export default NotFound;