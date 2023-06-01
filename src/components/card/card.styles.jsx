import styled from "styled-components";
import { BaseButton } from '../../components/button/button.styles'
import { motion } from "framer-motion";

export const Label = styled.label`
  padding: 0.3em 0.5em 0 0.8em;
  white-space: nowrap;
  font-weight: bold;
  color: var(--color2);
`
export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5em;
  padding: 0.5em;
  @media screen and (max-width: 574px) {
    flex-wrap: wrap;
  }
`
export const PriceParentContainer = styled.div`
  display: flex;
  background-color: #FFD1D1;
  outline: 3px solid var(--color1);
  z-index: 1;
  @media screen and (max-width: 470px) {
    flex-direction: column;
  }
  //border-bottom: 2px solid var(--color1);
`
export const PriceContainer = styled.div`
  padding: 0.2em;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  @media screen and (max-width: 500px) {
    padding-left: 0.3em;
  }
  @media screen and (max-width: 470px) {
    justify-content: flex-start;
  }
`
export const PriceDivider = styled.div`
  width: 3px;
  height: 100%;
  background-color: var(--color1); 
`
export const Price = styled.label`
  white-space: nowrap;
  font-size: 0.8em;
  font-weight: bold;
  color: var(--color1);
`
export const PriceLabel = styled.label`
  white-space: nowrap;
  font-size: 0.8em;
  font-weight: bold;
  color: var(--color1);
`
export const CardContainer = styled(motion.div)`
  opacity: ${prop => prop.isinview === 'a' ? 1 : 0.1};
  position: relative;
  width: calc(1.2*12em);
  height: calc(1.2*15em);
  border-radius: var(--card-radius);
  border: 4px solid var(--color1);
  overflow: hidden;
  box-shadow: 0 0 0 5px var(--background-color);
  //box-shadow: inset 0 0 5px 0 #B8B8B8;
  //padding-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: 0.25s ease-in-out;
  z-index: 1;
  background-color: var(--background-color);
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
  font-weight: bold;
  background-color: var(--color3);
  border-radius: var(--card-radius);
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
`
export const BuyADozenButton = styled(BaseButton)`
  width: 100%;
  flex-grow: 1;
  white-space: nowrap;
  color: white;
  font-weight: bold;
  background-color: var(--color2);
  border-radius: var(--card-radius);
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
`
export const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
`
export const ProductImage = styled.img`
  display: ${prop => !prop.loaded && 'none'};
  width: 100%;
  position: absolute;
  z-index: 0;
`
export const CountIndicatorContainer = styled.div`
  display: ${prop => prop.count === 0 ? 'none' : 'flex'};
  position: absolute;
  width: 10px;
  height: 20px;
  justify-content: center;
  align-items: center;
  background-color: var(--color2);
  color: white;
  top: 0.5em;
  right: 0.5em;
  z-index: 2;
  padding: 0.4em;
  border-radius: 1em;
  width: max-content;
  font-weight: bold;
`