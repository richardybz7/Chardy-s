import { AddToBoxButton, CardContainer, BuyADozenButton, Label, ButtonContainer } from "./card.styles";

const Card = ({product}) => {
  return (
    <CardContainer>
      <Label>{product.name ? product.name : product}</Label>
      <ButtonContainer>
        <AddToBoxButton>add to box</AddToBoxButton>
        <BuyADozenButton>buy a dozen</BuyADozenButton>
      </ButtonContainer>
    </CardContainer>
  )
}

export default Card;