import styled from "styled-components";
import { BaseButton } from '../../components/button/button.styles'
import Donut from '../../assets/Capturetest.JPG'
export const Label = styled.label`
  padding: 0.3em 0.5em 0 0.5em;
  white-space: nowrap;
`
export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5em;
  padding: 0.5em;
  @media screen and (max-width: 574px) {
    flex-wrap: wrap;
  }
`
export const PriceContainer = styled.div`
  background-color: #FFEEEE;
`
export const Price = styled.label`
  padding: 0 0.3em 0 0.7em;
  white-space: nowrap;
  font-size: 0.8em;
`
export const PriceLabel = styled.label`
  white-space: nowrap;
  font-size: 0.8em;
`
export const CardContainer = styled.div`
  position: relative;
  width: calc(1.2*12em);
  height: calc(1.2*15em);
  border-radius: 0.3em;
  border: 1px solid pink;
  //box-shadow: inset 0 0 3px 0 #B8B8B8;
  //padding-top: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: 0.2s ease-in-out;
  z-index: 1;
  @media screen and (max-width: 574px) {
    width: 45%;
  }
  @media screen and (min-width: 430px){
    :hover{
      transform: scale(1.03)
    }
  }
`
export const BugRecoveryButton = styled.button`
  display: none;
`
export const AddToBoxButton = styled(BaseButton)`
  width: 100%;
  flex-grow: 1;
  white-space: nowrap;
  color: white;
  background-color: #FF8F8F;
  transition: 0.1s ease-in-out;
  :active{
    background-color: #FF5938;
  }
  @media screen and (min-width: 430px){
    :hover{
      background-color: #FF5938;
    }
  }
`
export const BuyADozenButton = styled(BaseButton)`
  width: 100%;
  flex-grow: 1;
  white-space: nowrap;
  color: white;
  background-color: #FB7071;
  transition: 0.1s ease-in-out;
  :active{
    background-color: #FF5938;
  }
  @media screen and (min-width: 430px){
    :hover{
      background-color: #FF5938;
    }
  }
`
export const ProductImage = styled.div`
  background-image: url(${Donut});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  width: 100%;
  height: 100%;
`
export const CountIndicatorContainer = styled.div`
  display: ${prop => prop.count === 0 ? 'none' : 'flex'};
  position: absolute;
  width: 10px;
  height: 20px;
  justify-content: center;
  align-items: center;
  background-color: #FB7071;
  color: white;
  top: 2px;
  right: 2px;
  z-index: 2;
  padding: 0.2em;
  border-radius: 0.3em;
  width: max-content;
`