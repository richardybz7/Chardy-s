import styled from "styled-components";
import { BaseButton } from "../button/button.styles";

export const SearchResultContainer = styled.div`
  position: fixed;
  width: 88%;
  max-width: 480px;
  max-height: 200px;
  border-radius: 0.3em;
  overflow: auto;
  background-color: var(--background-color);
  margin-top: 0.5em;
  margin-right: 1.5rem;
`
export const SearchBoxItem = styled.div`
  display: flex;
  gap: 9.5em;
  align-items: center;
  padding: 0.5em;
  :not(:first-child){
    border-top: 5px solid var(--color1);
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
  font-size: 0.9rem;
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
  color: var(--color1);
  font-weight: bold;
`
export const SearchImageResult = styled.div`
  width: 70px;
  height: 70px;
  background-image: ${prop => prop.imageUrl && `url(${prop.imageUrl})`};
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 100%;
  border: 3px solid var(--color1);
`
export const AddToBoxButton = styled(BaseButton)`
  width: 100%;
  font-weight: bold;
  white-space: nowrap;
  color: white;
  background-color: var(--color3);
  border-radius: 2em;
  transition: 0.3s ease-out;
  :active{
    background-color: var(--color4);
    color: black;
  }
  @media screen and (min-width: 430px){
    :hover{
      background-color: var(--color4);
      color: black;
    }
  }
`
export const BuyADozenButton = styled(BaseButton)`
  width: 100%;
  font-weight: bold;
  white-space: nowrap;
  color: white;
  background-color: var(--color2);
  border-radius: 2em;
  transition: 0.1s ease-in-out;
  :active{
    background-color: var(--color4);
    color: black;
  }
  @media screen and (min-width: 430px){
    :hover{
      background-color: var(--color4);
      color: black;
    }
  }
`