import { DetailsLabel, ImageAndDetailsContainer, IndividualContainer, ItemImage, MyPurchasesItemContainer, PerPieceDozenColumnContainer, PerPieceDozenParentContainer, Quantity, QuantityColumnContainer, TotalPriceColumnContainer, UnitPriceColumnContainer } from "./myPurchases-item.styles"

const MyPurchasesItem = () => {
  return (
    <MyPurchasesItemContainer>
      <ImageAndDetailsContainer>
        <ItemImage/>
        <DetailsLabel>Maple</DetailsLabel>
      </ImageAndDetailsContainer>
      <PerPieceDozenParentContainer>
        <PerPieceDozenColumnContainer>
          <IndividualContainer>&nbsp;</IndividualContainer>
          <IndividualContainer>per Piece</IndividualContainer>
          <IndividualContainer>per Dozen</IndividualContainer>
        </PerPieceDozenColumnContainer>
        <UnitPriceColumnContainer>
          <IndividualContainer>Unit Price</IndividualContainer>
          <IndividualContainer>P30</IndividualContainer>
          <IndividualContainer>P340</IndividualContainer>
        </UnitPriceColumnContainer>
        <QuantityColumnContainer>
          <IndividualContainer>Quantity</IndividualContainer>
          <IndividualContainer>
            <Quantity value='1'/>
          </IndividualContainer>
          <IndividualContainer>
            <Quantity value='0'/>
          </IndividualContainer>
        </QuantityColumnContainer>
        <TotalPriceColumnContainer>
          <IndividualContainer>Total Price</IndividualContainer>
          <IndividualContainer>P30</IndividualContainer>
          <IndividualContainer>P0</IndividualContainer>
        </TotalPriceColumnContainer>
      </PerPieceDozenParentContainer>
      
    </MyPurchasesItemContainer>
  )
}

export default MyPurchasesItem