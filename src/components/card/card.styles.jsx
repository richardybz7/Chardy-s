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
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #FFD1D1;
  border-top: 5px solid var(--color1);
  border-bottom: 5px solid var(--color1);
  @media screen and (max-width: 500px) {
    justify-content: unset;
  }
`
export const PriceContainer = styled.div`
  padding-bottom: 0.2em;
  @media screen and (max-width: 500px) {
    padding-left: 0.3em;
  }
`
export const PriceDivider = styled.div`
  width: 5px;
  height: 100%;
  background-color: var(--color1); 
  @media screen and (max-width: 500px) {
    display: none;
  }
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
  border: 5px solid var(--color1);
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
export const ProductImage = styled.div`
  background-image: ${prop => prop.imageUrl && `url(${prop.imageUrl})`};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
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