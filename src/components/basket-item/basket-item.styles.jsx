import styled from "styled-components";
import { BaseButton } from "../button/button.styles";

export const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5em;
  :not(:first-child){
    margin-top: 0.5em;
  }
  font-size: 0.8rem;
  font-weight: bold;
`
export const ItemLabel = styled.label`

`
export const ItemCount = styled.label`
`
export const ItemImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 10em;
  background-image: ${prop => prop.imageUrl && `url(${prop.imageUrl})`};
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  border: 3px solid var(--color1);
`
export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const NumberOfDonutsLabel = styled.label`
`
export const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  flex-wrap: wrap;
`
export const ButtonAndCountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`
export const ItemButton = styled(BaseButton)`
  position: relative;
  padding: 0.3em;
  width: 2em;
  color: white;
  font-weight: bold;
  background-color: var(--color1);
  transition: 0.2s ease-out;
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
  :last-child{
    background-color: var(--background-color);
    color: var(--color1);
    padding: 0;
    margin-left: 0.5em;
    width: 20px;
    height: 20px;
    font-size: 1.4rem;
    border-radius: 1em;
    ::before{
      content: '';
      cursor: default;
      position: absolute;
      background-color: var(--color1);
      width: 3px;
      height: 35px;
      left: -10px;
      border-radius: 1em;
    }
    :active{
      background-color: black;
      color: var(--color4);
    }
    @media screen and (min-width: 430px){
      :hover{
        background-color: black;
        color: var(--color4);
      }
    }
  }
`