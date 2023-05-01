import styled from "styled-components";
import { Link } from "react-router-dom";
import PerPieceSVG from '../../assets/perPiece3Asset.svg'
import PerDozenSVG from '../../assets/perDozen3Asset.svg'
import BuyAPieceSVG from '../../assets/buyAPieceAsset.svg'
import BuyADozenSVG from '../../assets/buyADozenAsset.svg'
import { motion } from "framer-motion";

export const BasketItemsPerPieceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const BasketItemsPerDozenContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
export const BasketDivider = styled.div`
  background-color: var(--color1);
  height: 320px;
  width: 7px;
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
  color: var(--color1);
  font-weight: bold;
`
export const PerPieceImageContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const PerPieceImage = styled.div`
  background-image: url(${PerPieceSVG});
  background-repeat: no-repeat;
  background-position: center center;
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
  height: 230px;
  overflow-y: auto;
  width: 260px;
  padding: 0.5em;
  background-color: var(--background-color);
  border-top: 3px solid var(--color1);
  border-bottom: 3px solid var(--color1);
  ::-webkit-scrollbar{
    width: 7px;
  }
  ::-webkit-scrollbar-track{
    border-radius: 0.3em;
    background-color: #ECECEC;
  }
  ::-webkit-scrollbar-thumb{
    background-color: var(--color3);
    border-radius: 0.3em;
  }
  //box-shadow: inset 0 0 3px 0 #B8B8B8;
`
export const EmptyBasketLabel = styled.label`
`
export const EmptyBasketImageContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const EmptyBasketImage = styled.div`
  background-image: ${props => props.perPieceDozen === 'true' ? `url(${BuyAPieceSVG})` : `url(${BuyADozenSVG})`};
  width: 150px;
  height: 150px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
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
  background-color: ${props => props.disabled > 0 ? '#FF8F8F' : 'transparent'};
  border: 1px solid white;
  font-size: 0.8rem;
  outline: none;
  white-space: nowrap;
  text-decoration: none;
  color: white;
  transition: 0.1s ease-in-out;
  :active{
    color: black;
    border: ${props => props.disabled > 0 ? '1px solid var(--color4)' : '1px solid white'};
    background-color: ${props => props.disabled > 0 ? 'var(--color4)' : 'transparent'};
  }
  @media screen and (min-width: 430px){
    :hover{
      color: black;
      border: ${props => props.disabled > 0 ? '1px solid var(--color4)' : '1px solid white'};
      background-color: ${props => props.disabled > 0 ? 'var(--color4)' : 'transparent'};
    }
  }
`
export const BasketDropdownContainer = styled(motion.div).attrs({
  initial:{opacity: 0, transform: 'translateX(800px)'},
  animate:{opacity: 1, transform: 'translateX(0px)', transition:{duration: 0.2}},
  duration: 2,
  exit:{opacity: 0, transform: 'translateX(800px)'}
})`
  position: fixed;
  width: max-content;
  right: -3px;
  top: 68px;
  border-radius: 2.8em;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 15;
  box-sizing: border-box;
  border: 3px solid var(--color1);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  //box-shadow: 0 0 3px 0 #B8B8B8;
  @media screen and (max-width: 768px) {
    top: 60px;
    ${BasketItemsContainer}{
      flex-direction: column;
    }
    ${BasketDivider}{
      height: 3px;
      width: 100%;
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
    ${PerPieceImageContainer}{
      width: 65px;
    }
    ${BasketItems}{
      margin: 2em 0;
      border-left: 3px solid var(--color1);
      border-top-left-radius: 2.5em;
      border-bottom-left-radius: 2.5em;
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