import { ProductsParentContainer } from './products.style'
import Categories from '../../components/categories/categories.component'
import { addCollectionAndDocuments } from '../../utils/firebase/firebase.utils'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsStart, setProductsMap } from '../../store/products/products.action'
import { selectProductsMap } from '../../store/products/products.selector'
import PRODUCTS_DATA from '../../data'
const Products = () => {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getProductsStart())
  // },[])
  const productsMap = useSelector(selectProductsMap)
  // useEffect(() => {
  //   addCollectionAndDocuments('products', PRODUCTS_DATA)
  //   console.log('done')
  // },[])
  return (
    <ProductsParentContainer>
      {
        Object.keys(productsMap).map((title, index) => {
          return (
            <Categories key={index} title={title} products={productsMap[title]}/>
            )
        })
      }
    </ProductsParentContainer>
  )
}

export default Products;