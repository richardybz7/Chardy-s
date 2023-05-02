import styled, { keyframes } from "styled-components";
import DonutSVG from '../../assets/spinnerAsset10.svg'
import { ReactComponent as LogoSVG } from '../../assets/logo.svg'
import { motion } from "framer-motion";

export const ParentSpinnerContainer = styled(motion.div).attrs({
  initial:{opacity: 0},
  animate:{opacity: 1},
  exit:{opacity: 0}
})`
  background-color: var(--background-color);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const rotate360 = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`
export const SpinnerContainer = styled.div`
  padding: 0.5em;
  animation: ${rotate360} 20s linear infinite;
  height: max-content;
  width: max-content;
`
export const DonutImage = styled.div`
  background-image: url(${DonutSVG});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  width: 30vw;
  height: 30vw;
  @media screen and (max-width: 500px){
    width: 50vw;
    height: 50vw;
  }
`
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 7.5rem;
`
export const LogoSvg = styled(LogoSVG)`
`