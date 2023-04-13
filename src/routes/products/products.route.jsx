import { CategoriesContainer, ProductsParentContainer, ReferenceContainer, SideNavigationButton, SideNavigationContainer } from './products.style'
import Categories from '../../components/categories/categories.component'
import { addCollectionAndDocuments } from '../../utils/firebase/firebase.utils'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsStart, setProductReference } from '../../store/products/products.action'
import { selectProductTargetReference, selectProductsMap } from '../../store/products/products.selector'
import PRODUCTS_DATA from '../../data'
const Products = () => {
  const categoryRef = useRef([])
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  //const dispatch = useDispatch()
  const selectProductTargetRef = useSelector(selectProductTargetReference)
  const productsMap = useSelector(selectProductsMap)
  // useEffect(() => {
  //   dispatch(getProductsStart())
  // },[])
  // useEffect(() => {
  //   addCollectionAndDocuments('products', PRODUCTS_DATA)
  //   console.log('done')
  // },[])
  const scrollViewHandler = (refNum) => {
    const bodyRect = document.body.getBoundingClientRect().top
    let offset = windowSize <= 768 ? 137.375 : 80.2 
    window.scrollTo({
      top: categoryRef.current[refNum].getBoundingClientRect().top - bodyRect - offset,
      behavior: 'smooth'
    })
  }
  const resizeHandler = () => {
    setWindowSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler)
  })
  useEffect(() => {
    if(!(selectProductTargetRef === undefined || selectProductTargetRef === null)){
      scrollViewHandler(selectProductTargetRef)
    }
    //   
  },[selectProductTargetRef])
  return (
    <ProductsParentContainer>
      <CategoriesContainer>
        {
          Object.keys(productsMap).map((title, index) => {
            return (
              <ReferenceContainer key={index} ref={el=>categoryRef.current[index] = el}>
                <Categories category={title} key={index} title={title} products={productsMap[title]}/>
              </ReferenceContainer>
              )
            })
        }
      </CategoriesContainer>
    </ProductsParentContainer>
  )
}

export default Products;