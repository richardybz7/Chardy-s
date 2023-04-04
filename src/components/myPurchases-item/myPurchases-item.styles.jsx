import styled from "styled-components";

export const MyPurchasesItemContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0.7em;
  padding-right: 1.5em;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.2em;
  :nth-of-type(even){
    background-color: #ECECEC;
  }
`
export const ImageAndDetailsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ItemImage = styled.img`
  width: 120px;
  height: 120px;
  background-color: green;
  border: none;
  border-radius: 0.3em;
`
export const DetailsLabel = styled.label`
  width: 80px;
  padding-left: 1em;
`
export const PerPieceDozenParentContainer = styled.div`
  display: flex;
`
export const PerPieceDozenColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const UnitPriceColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const QuantityColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TotalPriceColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const IndividualContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  :nth-child(1){
    border-bottom: 1px solid black;
    padding-bottom: 0.5em;
  }
  :nth-child(2){
    border-bottom: 1px solid black;
    padding: 0.5em 0;
  }
  :nth-child(3){
    padding-top: 0.5em;
  }
`

export const Quantity = styled.input`
  width: 40px;
  height: 12px;
  border: 1px solid #F2F2F2;
  text-align: center;
  font-size: 1em;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
  :focus{
    outline: none
  }
`
Quantity.defaultProps = {
  disabled: true
}