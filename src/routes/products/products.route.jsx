import { ProductsParentContainer } from './products.style'
import Categories from '../../components/categories/categories.component'
import { addCollectionAndDocuments, getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsMap } from '../../store/products/products.action'
import { selectProductsMap } from '../../store/products/products.selector'
const Products = () => {
  const dispatch = useDispatch()
  const productsMap = useSelector(selectProductsMap)
  const titleArrangement = ['New', 'Best Sellers', 'Classics', 'Drinks']
  useEffect(() => {
    const getProductsMap = async () => {
      const productsMap = await getCategoriesAndDocuments()
      dispatch(setProductsMap(productsMap))
    }
    getProductsMap()
  },[])
  return (
    <div>
      <ProductsParentContainer>
        <div>
          {
            Object.keys(productsMap).map((title, index) => {
              const productData = productsMap[title]
              return (
                <Categories key={index} title={title} products={productData}/>
                )
              })
          }
        </div>
      </ProductsParentContainer>
    </div>
  )
}

export default Products;