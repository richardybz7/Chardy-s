import styled from "styled-components";
import { Link } from "react-router-dom";
import PerPieceSVG from '../../assets/perPiece3Asset.svg'
import PerDozenSVG from '../../assets/perDozen3Asset.svg'
export const BasketItemsPerPieceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const BasketItemsPerDozenContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const BasketDivider = styled.div`
  background-color: pink;
  height: 48px;
  width: 4px;
  margin: 0 0.3em;
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
export const PerPieceImage = styled.div`
  background-image: url(${PerPieceSVG});
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  border-radius: 0.3em;
`
export const PerDozenImage = styled.div`
  background-image: url(${PerDozenSVG});
  background-repeat: no-repeat;
  width: 65px;
  height: 50px;
  border-radius: 0.3em;
`
export const BasketItems = styled.div`
  height: 200px;
  border-radius: 0.3em;
  overflow-y: auto;
  width: 260px;
  padding: 0.5em;
  border: 1px solid #DBDBDB;
  //box-shadow: inset 0 0 3px 0 #B8B8B8;
`

export const EmptyBasketLabel = styled.label`
`

export const BasketButtonContainer = styled.div`
  margin-top: 1em;
`
export const BasketButton = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8em;
  border-radius: 0.4em;
  border: 1px solid #FF6161;
  font-size: 0.8rem;

  white-space: nowrap;
  text-decoration: none;
  color: #FF6161;
  transition: 0.1s ease-in-out;
  transform-origin: center;
  :hover{
    transform: scale(1.015);
    color: #E961FF;
    border: 1px solid #E961FF;
  }
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
  padding: 1.3em 0.5em;
  box-shadow: 0 0 3px 0 #B8B8B8;
  @media screen and (max-width: 768px) {
    ${BasketItemsContainer}{
      flex-direction: column;
    }
    ${BasketDivider}{
      height: 2px;
      width: 48px;
      margin: 0.3em 0.5em;
    }
    ${BasketItemsPerPieceContainer},
    ${BasketItemsPerDozenContainer}{
      flex-direction: row;
    }
    ${BasketHeader}{
      flex-direction: column;
      padding-right: 0.5em;
    }
    ${BasketHeaderLabel}{
      text-align: center;
      white-space: normal;
    }
  }
  @media screen and (max-width: 375px){
    right: 0;
    width: 100%;
    ${BasketItems}{
      height: 150px;
    }
  }
`