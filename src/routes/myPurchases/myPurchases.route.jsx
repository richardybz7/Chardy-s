import MyPurchasesItem from "../../components/myPurchases-item/myPurchases-item.component";
import Search from "../../components/searchbox/searchbox.component";
import { MyPurchasesContainer, ParentMyPurchasesContainer, SearchPurchasesContainer, TabButton, TabsButtonContainer, TabsContainer, TabsContentContainer } from "./myPurchases.styles"

const MyPurchases = () => {
  return (
    <ParentMyPurchasesContainer>
      <MyPurchasesContainer>
        <SearchPurchasesContainer>
          <Search placeholder='Search purchases'/>
        </SearchPurchasesContainer>
        <TabsContainer>
          <TabsButtonContainer>
            <TabButton>My purchases</TabButton>
            <TabButton>To receive</TabButton>
          </TabsButtonContainer>
          <TabsContentContainer>
            <MyPurchasesItem/>
          </TabsContentContainer>
        </TabsContainer>
      </MyPurchasesContainer>
    </ParentMyPurchasesContainer>
  )
}

export default MyPurchases;