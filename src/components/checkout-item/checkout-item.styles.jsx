import styled, {css} from "styled-components";
import { BaseButton } from "../button/button.styles";

export const CheckoutItemContainer = styled.div`
  display: flex;
  width: var(--checkOutWidth);
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
export const PerItemAndActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6vw;
`
export const ItemDetailsAndActionParentContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const PerPieceOrDozenLabel = styled.label`
  width: 80px;
  padding-left: 1em;
`
export const ItemImageAndDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
  height: content;
`
export const ItemImageContainer = styled.img`
  width: 120px;
  height: 120px;
  background-color: green;
  border: none;
  border-radius: 0.3em;
`

export const DetailContainer = styled.div`
  width: 150px;
`
export const ItemDetailsAndActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6vw;
  :not(:first-child){
    border-top: 1px solid #E2E2E2;
    padding-top: 1em; 
  }
  :not(:last-child){
    padding-bottom: 1em; 
  }
`
export const UnitPriceLabel = styled.label`
  width: 30px;
`

export const QuantityContainer = styled.div`
  display: flex;
`
export const ReduceQuantityButton = styled(BaseButton)`
  border: 1px solid #F2F2F2;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transition: 0.2s ease;
  ${props => !props.disabled && css`
    &:hover{
      border: 1px solid #FF7D7D;
      outline: none;
      color: #FF7D7D;
      cursor: pointer;
    }
  `}
`
export const QuantityInput = styled.input`
  width: 40px;
  border: 1px solid #F2F2F2;
  border-left: none;
  border-right: none;
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
QuantityInput.defaultProps = {
  type: 'number'
}
export const AddQuantityButton = styled(BaseButton)`
  border: 1px solid #F2F2F2;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  transition: 0.2s ease;
  :hover{
    border: 1px solid #FF7D7D;
    outline: none;
    color: #FF7D7D;
  }
`


export const TotalPriceLabel = styled.label`
  width: 30px;
`
export const RemoveActionButton = styled(BaseButton)`
  border: 1px solid #F2F2F2;
  transition: 0.2s ease;
  :hover{
    border: 1px solid #FF7D7D;
    outline: none;
    color: #FF7D7D;
  }
`