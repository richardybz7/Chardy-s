import { CategoryContainer, TitleHeader, CardsContainer } from "./categories.styles";
import Card from "../card/card.component";

const Categories = ({ title, products}) => {
  products.map((d) => {
    console.log(d)
  })
  return (
    <CategoryContainer>
      <TitleHeader>{title}</TitleHeader>
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