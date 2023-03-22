import { ProductsParentContainer } from './products.style'
import Categories from '../../components/categories/categories.component'
import PRODUCT_DATA from '../../data.json'

const Products = () => {
  return (
    <div>
      <ProductsParentContainer>
        {/*
          PRODUCT_DATA.categories..map((categories) => (
            <Categories key={categories.id} items={categories}/>
          ))
          */}
        <Categories/>
      </ProductsParentContainer>
    </div>
  )
}

export default Products;