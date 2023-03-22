import { AddToBoxButton, CardContainer, BuyADozenButton, Label, ButtonContainer } from "./card.styles";

const Card = ({otherProps}) => {
  return (
    <CardContainer>
      <Label>{otherProps.name}</Label>
      <ButtonContainer>
        <AddToBoxButton/>
        <BuyADozenButton/>
      </ButtonContainer>
    </CardContainer>
  )
}

export default Card;