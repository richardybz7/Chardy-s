import styled from "styled-components";
import { BaseButton } from "../button/button.styles";


export const BasketItemsPerPieceContainer = styled.div`
  width: 100%;
`
export const BasketItemsPerDozenContainer = styled.div`
  width: 100%;
`
export const BasketDivider = styled.div`
  background-color: pink;
  height: 270px;
  width: 10px;
  margin: 0 1em;
`
export const BasketItemsContainer = styled.div`
  display: flex;
  width: 100%;
`
export const BasketHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-bottom: 1em;
`
export const BasketHeaderLabel = styled.label`
`
export const BasketHeaderImage = styled.div`
  background-color: green;
  width: 50px;
  height: 50px;
  border-radius: 0.3em;
`
export const BasketItems = styled.div`
  height: 200px;
  border-radius: 0.3em;
  overflow-y: auto;
  width: max-content;
`

export const EmptyBasketLabel = styled.label`
`

export const BasketButtonContainer = styled.div`
  margin-top: 1em;
`
export const BasketButton = styled(BaseButton)`

`

export const BasketDropdownContainer = styled.div`
  position: absolute;
  width: max-content;
  right: 10px;
  top: 62px;
  border-radius: 0.3em;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 15;
  box-sizing: border-box;
  padding: 1.3em;
  box-shadow: 0 0 3px 0 #B8B8B8;
  @media screen and (max-width: 768px) {
    ${BasketItemsContainer}{
      flex-direction: column;
      align-items: center;
    }
    ${BasketDivider}{
      height: 5px;
      width: 100%;
      max-width: 600px;
      margin: 1em 1em;
    }
  }
`