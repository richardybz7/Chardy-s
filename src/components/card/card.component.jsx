import { AddToBoxButton, CardContainer, BuyADozenButton, Label, ButtonContainer } from "./card.styles";

const Card = ({product}) => {
  return (
    <CardContainer>
      <Label>{product.name}</Label>
      <ButtonContainer>
        <AddToBoxButton/>
        <BuyADozenButton/>
      </ButtonContainer>
    </CardContainer>
  )
}

export default Card;