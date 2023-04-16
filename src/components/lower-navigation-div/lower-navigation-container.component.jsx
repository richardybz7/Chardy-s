import { useLocation } from "react-router-dom";
import ProductNavigation from "../product-navigation/product-navigation.component";
import Search from "../searchbox/searchbox.component";
import { LowerSearchBoxContainer } from "./lower-navigation-container.styles";
import { selectProductsMap } from "../../store/products/products.selector";
import { useSelector } from "react-redux";

const LowerNavigationContainer = () => {
  const products = useSelector(selectProductsMap)
  const location = useLocation()
  return (
    <LowerSearchBoxContainer>
      <Search placeholder='Search for a craving' items={products}  location={location.pathname}/>
      <ProductNavigation/>
    </LowerSearchBoxContainer>
  )
}

export default LowerNavigationContainer;