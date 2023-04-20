import { CategoryContainer, CardsContainer, TitleContainer, Title } from "./categories.styles";
import Card from "../card/card.component";

const Categories = ({ title, products}) => {
  return (
    <CategoryContainer onClick={e => e.preventDefault()}>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>  
      <CardsContainer>
        {
          products
            .map((product) => {
              return <Card key={product.id} product={product}/>
            }
            )
        }
      </CardsContainer>
    </CategoryContainer>
  )
}

export default Categories