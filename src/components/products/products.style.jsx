import styled from "styled-components";
import { BaseButton } from "../../components/button/button.styles";
import { motion } from "framer-motion";


export const ProductsParentContainer = styled(motion.div).attrs({
  initial:{opacity: 0},
  animate:{opacity: 1},
  exit:{opacity: 0}
})`
  padding-bottom: 3em;
`
export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
export const ReferenceContainer = styled.div``
export const BackToTopButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  border: 3px solid var(--color1);
  font-size: 1.2rem;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  color: var(--color1);
  background-color: white;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  transition: 0.1s ease-in-out;
  :active{
    background-color: var(--color2);
    color: white;
    border: 3px solid white;
    transform: scale(1.2);
  }
  @media screen and (min-width: 430px){
    :hover{
      background-color: var(--color2);
      color: white;
      border: 3px solid white;
      transform: scale(1.2);
    }
  }
`