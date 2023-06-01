import styled from "styled-components";
import NotFoundSVG_ from '../../assets/NotFound.svg'

export const NotFoundParentContainer = styled.div`
  background-color: var(--background-color);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NotFoundContainer = styled.div`
`
export const NotFoundSVG = styled.div`
  background-image: url(${NotFoundSVG_});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  height: 30vw;
  width: 80vw;
`
export const NotFoundClickableLabel = styled.div`
  cursor: pointer;
  color: blue;
  :hover{
    text-decoration: underline;
  }
`
export const NotFoundLabel = styled.label`
  font-size: 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
`