import { Fragment} from "react"
import { DetailsLabel, ImageAndDetailsContainer, IndividualContainer, ItemImage, MyPurchasesItemContainer, PerPieceDozenColumnContainer, PerPieceDozenParentContainer, Quantity, QuantityColumnContainer, TotalPriceColumnContainer, UnitPriceColumnContainer } from "./myPurchases-item.styles"

const MyPurchasesItem = ({item}) => {
  return (
    <MyPurchasesItemContainer>
      <ImageAndDetailsContainer>
        <ItemImage imageUrl={item.imageUrl && item.imageUrl}/>
        <DetailsLabel>{item.name}</DetailsLabel>
      </ImageAndDetailsContainer>
      <PerPieceDozenParentContainer>
        <PerPieceDozenColumnContainer>
          <IndividualContainer>&nbsp;</IndividualContainer>
          <IndividualContainer>per Piece</IndividualContainer>
          <IndividualContainer>per Dozen</IndividualContainer>
        </PerPieceDozenColumnContainer>
        <UnitPriceColumnContainer>
          <IndividualContainer>Unit Price</IndividualContainer>
          <IndividualContainer>{item.itemPrice}</IndividualContainer>
          <IndividualContainer>{item.dozenPrice}</IndividualContainer>
        </UnitPriceColumnContainer>
        <QuantityColumnContainer>
          <IndividualContainer>Quantity</IndividualContainer>
          <IndividualContainer>
            <Quantity value={item.count}/>
          </IndividualContainer>
          <IndividualContainer>
            <Quantity value={item.dozenCount}/>
          </IndividualContainer>
        </QuantityColumnContainer>
        <TotalPriceColumnContainer>
          <IndividualContainer>Total Price</IndividualContainer>
          <IndividualContainer>{item.count * item.itemPrice}</IndividualContainer>
          <IndividualContainer>{item.dozenCount * item.dozenPrice}</IndividualContainer>
        </TotalPriceColumnContainer>
      </PerPieceDozenParentContainer>
    </MyPurchasesItemContainer>
  )
}

export default MyPurchasesItem