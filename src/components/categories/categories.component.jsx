import { CategoryContainer, TitleHeaderImage, CardsContainer, TitleContainer, Title } from "./categories.styles";
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
            .filter((_, idx) => idx < 5)
            .map((product) => 
            <Card key={product.id} product={product}/>)
        }
      </CardsContainer>
    </CategoryContainer>
  )
}

export default Categories;