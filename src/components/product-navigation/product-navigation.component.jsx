import { useDispatch, useSelector } from "react-redux"
import { selectProductTargetReference, selectProductsMap } from "../../store/products/products.selector"
import { CategoryLabel, ProductNavigationContainer } from "./product-navigation.styles"
import { setProductTargetReference } from "../../store/products/products.action"

const ProductNavigation = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectProductsMap)
  const selectTarget = useSelector(selectProductTargetReference)
  const categoryNavHandler = (i) => {
    dispatch(setProductTargetReference(i))
  }

  return (
    <ProductNavigationContainer>
      {
        Object.keys(products).map((title, i) => 
          <CategoryLabel key={i} onClick={() => categoryNavHandler(i)}>{title}</CategoryLabel>
        )
      }
    </ProductNavigationContainer>
  )
}

export default ProductNavigation