import styled, { css, keyframes } from "styled-components";

const animateTopOn = keyframes`
  from{
    transform: translateY(0px) rotate(0deg);
  }
  to{
    transform-origin: top left;
    transform: translateY(-1.5px) rotate(45deg);
  }
`
const animateTopOff = keyframes`
  from{
    transform-origin: top left;
    transform: translateY(-2px) rotate(45deg);
  }
  to{
    transform: translateY(0px) rotate(0deg);
  }
`
const animateBottomOn = keyframes`
  from{
    transform: translateY(0px) rotate(0deg);
  }
  to{
    transform-origin: bottom left;
    transform: translateY(1.5px) rotate(-45deg);
  }
`
const animateBottomOff = keyframes`
  from{
    transform-origin: bottom left;
    transform: translateY(2px) rotate(-45deg);
  }
  to{
    transform: translateY(0px) rotate(0deg);
  }
`
const animatePattyOn = keyframes`
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
`
const animatePattyOff = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`
export const BurgerBunTop = styled.div`
  width: 25px;
  height: 2px;
  margin-bottom: 5px;
  background-color: #FF6D6D;
  border-radius: 1em;
  animation: ${prop => prop.trigger ? css`${animateTopOn} 0.2s ease-in-out forwards` : css`${animateTopOff} 0.2s ease-in-out`};
`
export const BurgerPatty = styled.div`
  width: 25px;
  height: 2px;
  margin-bottom: 5px;
  background-color: #FF6D6D;
  border-radius: 1em;
  animation: ${prop => prop.trigger ? css`${animatePattyOn} 0.2s ease-in-out forwards` : css`${animatePattyOff} 0.2s ease-in-out`};
`
export const BurgerBunBottom = styled.div`
  width: 25px;
  height: 2px;
  background-color: #FF6D6D;
  border-radius: 1em;
  animation: ${prop => prop.trigger ? css`${animateBottomOn} 0.2s ease-in-out forwards` : css`${animateBottomOff} 0.2s ease-in-out`};
`
export const BurgerContainer = styled.button`
  width: fit-content;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  :before{
    display: ${prop=> prop.notification === 0 && 'none'};
    position: absolute;
    content: '';
    right: -5px;
    top: -7px;
    height: 7px;
    width: 7px;
    background-color: #FF6161;
    border-radius: 7px;
  }
`
export const BurgerParentContainer = styled.div`
  position: relative;
`