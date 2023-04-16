import styled from "styled-components";
import { BaseButton } from "../button/button.styles";
import Donut from '../../assets/Capturetest.JPG'

export const SearchResultContainer = styled.div`
  position: fixed;
  width: 88%;
  max-width: 480px;
  max-height: 200px;
  border-radius: 0.3em;
  overflow: auto;
  background-color: var(--background-color);
  border: 1px solid gray;
  margin-top: 0.5em;
  margin-right: 1.5rem;
`
export const SearchBoxItem = styled.div`
  display: flex;
  gap: 9.5em;
  align-items: center;
  padding: 0.5em;
  :not(:first-child){
    border-top: 1px solid gray;
  }
  @media screen and (max-width: 533px){
    flex-direction: column;
    align-items: initial;
    gap: 7px;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 533px){
    flex-direction: row;
  }
`
export const ImageAndDetailContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
export const DetailLabel = styled.label`
  font-size: 0.85em;
  width: 114px;
`
export const PriceLabel = styled.label`
  font-size: 0.8em;
  padding-top: 0.2em;
  background-color: #FFEEEE;
`
export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SearchImageResult = styled.div`
  width: 70px;
  height: 70px;
  background-image: url(${Donut});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`
export const AddToBoxButton = styled(BaseButton)`
  width: 100%;
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