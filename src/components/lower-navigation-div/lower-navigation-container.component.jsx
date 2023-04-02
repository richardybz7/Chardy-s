import Search from "../searchbox/searchbox.component";
import { LowerSearchBoxContainer } from "./lower-navigation-container.styles";

const LowerNavigationContainer = () => {
  return (
    <LowerSearchBoxContainer>
      <Search placeholder='Search for a craving'/>
    </LowerSearchBoxContainer>
  )
}

export default LowerNavigationContainer;