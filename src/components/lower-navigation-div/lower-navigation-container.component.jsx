import ProductNavigation from "../product-navigation/product-navigation.component";
import Search from "../searchbox/searchbox.component";
import { LowerSearchBoxContainer } from "./lower-navigation-container.styles";

const LowerNavigationContainer = () => {
  return (
    <LowerSearchBoxContainer>
      <Search placeholder='Search for a craving'/>
      <ProductNavigation/>
    </LowerSearchBoxContainer>
  )
}

export default LowerNavigationContainer;