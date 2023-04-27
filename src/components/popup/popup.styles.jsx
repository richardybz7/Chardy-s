import styled, { css } from "styled-components";
import { BaseButton } from "../button/button.styles";
import { motion } from "framer-motion";

export const PopupParentContainer = styled(motion.div).attrs((props) => ({
  initial:{
    opacity: 0, 
    transform: props.location !== '/auth' ? 'translateY(-200px)' : 'translateX(200px)'
  },
  animate:{
    opacity: 1, 
    transform: props.location !== '/auth' ? 'translateY(0px)' : 'translateX(0px)',
    transition:{
      type: "spring",
      stiffness: 200,
      damping: 15
    },
  }, 
  duration: 2,
  exit:{
    opacity: 0, 
    transform: props.location !== '/auth' ? 'translateY(-200px)' : 'translateX(-200px)'
  }
}))`
  position: fixed;
  width: 100%;
  z-index: 1000;
`
export const PopupContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translateX(-50%); 
  padding: 0.7em;
  background-color: ${prop => !prop.custom ? '#FF5938' : 'green'};
  color: white;
  border-radius: 0.5em;
  text-align: center;
`
export const MessageContainer = styled.div`
`
export const MessageLabel = styled.div`
  font-size: 0.85rem;
`
export const ButtonContainer = styled.div`
`
export const PopupButton = styled(BaseButton)`

`