import styled from "styled-components";
import { BaseButton } from "../button/button.styles";

export const ItemContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5em;
  :not(:first-child){
    margin-top: 0.5em;
  }
`
export const ItemLabel = styled.label`

`
export const ItemCount = styled.label`
`
export const ItemImage = styled.div`
  background-color: green;
  width: 50px;
  height: 50px;
  border-radius: 0.3em;
`
export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const NumberOfDonutsLabel = styled.label`
`
export const ActionContainer = styled.div`
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
  align-items: center;
`
export const ButtonAndCountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`
export const ItemButton = styled(BaseButton)`
  padding: 0.5em;
  width: 2em;
  color: white;
  font-size: 0.9rem;
  background-color: #FFD2D2;
`