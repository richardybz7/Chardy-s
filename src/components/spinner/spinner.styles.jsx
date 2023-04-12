import styled, { keyframes } from "styled-components";
import DonutSVG from '../../assets/spinner1.svg'
export const ParentSpinnerContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
`