import { CategoryContainer, CardsContainer, TitleContainer, Title, TitleAssetLeft, TitleAssetRight, TitleParentContainer } from "./categories.styles";
import Card from "../card/card.component";

const Categories = ({ title, products}) => {
  return (
    <CategoryContainer onClick={e => e.preventDefault()}>
      <TitleParentContainer>
        <TitleContainer>
          <TitleAssetLeft/>
          <Title>{title}</Title>
          <TitleAssetRight/>
        </TitleContainer>  
      </TitleParentContainer>
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