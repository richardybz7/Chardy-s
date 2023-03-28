import { ProductsParentContainer } from './products.style'
import Categories from '../../components/categories/categories.component'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsMap } from '../../store/products/products.action'
import { selectProductsMap } from '../../store/products/products.selector'
import PRODUCTS_DATA from '../../data'
const Products = () => {
  const dispatch = useDispatch()
  const productsMap = useSelector(selectProductsMap)
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
              return (
                <Categories key={index} title={title} products={productsMap[title]}/>
                )
            })
          }
        </div>
      </ProductsParentContainer>
    </div>
  )
}

export default Products;