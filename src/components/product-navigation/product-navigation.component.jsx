import { useDispatch, useSelector } from "react-redux"
import { selectProductsMap } from "../../store/products/products.selector"
import { CategoryLabel, LabelDivision, ProductNavigationContainer } from "./product-navigation.styles"
import { setProductTargetReference } from "../../store/products/products.action"
import { Fragment } from "react"

const ProductNavigation = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectProductsMap)
  const categoryNavHandler = (i) => {
    dispatch(setProductTargetReference(i))
  }

  return (
    <ProductNavigationContainer>
      {
        Object.keys(products).map((title, i) => 
          <Fragment key={i+20}>
            <CategoryLabel key={i} onClick={() => categoryNavHandler(i)}>{title}</CategoryLabel>
            <LabelDivision key={i+10}/>
          </Fragment>
          )
      }
    </ProductNavigationContainer>
  )
}

export default ProductNavigation