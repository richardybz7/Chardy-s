import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const ParentMenuContainer = styled(motion.div).attrs({
  initial:{opacity: 0, transform: 'translateX(-200px)'},
  animate:{opacity: 1, transform: 'translateX(-2px)', transition:{duration: 0.2}},
  duration: 2,
  exit:{opacity: 0, transform: 'translateX(-200px)'}
})`
  position: absolute;
  z-index: 99;
  top: 60px;
  left: 0px;
  background-color: var(--background-color);
  box-shadow: 0 0 3px 0 #B8B8B8;
  border: 1px solid #FF6D6D;
  padding: 1em 0;
  border-top-right-radius: 0.3em;
  border-bottom-right-radius: 0.3em;
`
export const ParentContentContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const MenuItemLabel = styled(Link)`
  position: relative;
  cursor: pointer;
  padding: 0.2em 0.5em;
  padding-right: 1em;
  text-decoration: none;
  color: #FF6D6D;
  font-size: 1.5em;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  transition: 0.1s ease-in-out;
  :hover{
    background-color: pink;
  }
  :not(:first-child){
    border-top: 1px solid #FF6D6D;
  }
  ${props => props.mypurchases && css`
    :before{
      display: ${prop=> prop.notification === 0 && 'none'};
      position: absolute;
      content: '';
      right: 15px;
      top: 5px;
      height: 7px;
      width: 7px;
      background-color: #FF6161;
      border-radius: 7px;
    }
  `}
`
export const LinkAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
`