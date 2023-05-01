import styled, {css} from "styled-components";
import { BaseButton } from "../button/button.styles";
import testImage from '../../assets/Capturetest.JPG'

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
  @media screen and (max-width: 921px){
    flex-direction: column;
    padding-right: 0.7em;
  }
`
export const PerItemAndActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  @media screen and (max-width: 921px){
    gap: 3vw;
    flex-direction: column;
  }
`
export const ItemDetailsAndActionParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color1);
`
export const NumbersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  @media screen and (max-width: 921px){
    gap: 10vw;
  }
  color: var(--color1);
`
export const PerPieceOrDozenLabel = styled.label`
  width: 100%;
  padding-left: 1em;
  @media screen and (max-width: 921px){
    padding-left: 0.5em;
    padding-bottom: 0.5em;
    border-bottom: 1px solid var(--color1);
  }
  font-weight: bold;
`
export const ItemImageAndDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
  height: content;
`
export const ItemImageContainer = styled.div`
  background-image: ${prop => prop.imageUrl && `url(${prop.imageUrl})`};
  background-position: center center;
  background-size: contain;
  width: 100px;
  height: 100px;
  border: 3px solid var(--color1);
  border-radius: 1em;
`

export const DetailContainer = styled.div`
  width: 150px;
  color: var(--color1);
  font-weight: bold;
`
export const ItemDetailsAndActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  :not(:first-child){
    border-top: 1px solid #E2E2E2;
    padding-top: 0.5em; 
  }
  :not(:last-child){
    padding-bottom: 0.5em; 
  }
  @media screen and (max-width: 921px){
    gap: 1em;
    padding-top: 1em;
    flex-direction: column;
    :not(:first-child){
      border-top: none;
    }
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
  background-color: var(--color1);
  color: white;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transition: 0.2s ease;
  ${props => !props.disabled && css`
    &:active{
      border: 1px solid var(--color4);
      outline: none;
      background-color: var(--color4);
      color: black;
      cursor: pointer;
    }
    @media screen and (min-width: 430px){
      &:hover{
        border: 1px solid var(--color4);
        outline: none;
        background-color: var(--color4);
        color: black;
        cursor: pointer;
      }
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
  transition: 0.2s ease;
  background-color: var(--color1);
  color: white;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  transition: 0.2s ease;
  :active{
    border: 1px solid var(--color4);
    outline: none;
    background-color: var(--color4);
    color: black;
  }
  @media screen and (min-width: 430px){
    :hover{
      border: 1px solid var(--color4);
      outline: none;
      background-color: var(--color4);
      color: black;
    }
  }
`
export const TotalPriceLabel = styled.label`
  width: 30px;
`
export const RemoveActionButton = styled(BaseButton)`
  border: 1px solid #F2F2F2;
  transition: 0.2s ease;
  background-color: var(--color1);
  color: white;
  :active{
    border: 1px solid var(--color4);
    outline: none;
    background-color: var(--color4);
    color: black;
  }
  @media screen and (min-width: 430px){
    :hover{
      border: 1px solid var(--color4);
      outline: none;
      background-color: var(--color4);
      color: black;
    }
  }
`
export const DetailsAndActionHeaderContainer = styled.div`
  display: flex;
  gap: 12vw;
  @media screen and (min-width: 921px){
    display: none;
  }
`
export const UnitPriceHeaderLabel = styled.label`
`
export const QuantityHeaderLabel = styled.label`
`
export const TotalItemPriceHeaderLabel = styled.label`
`