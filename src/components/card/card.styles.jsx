import styled from "styled-components";
import { BaseButton } from '../../components/button/button.styles'
export const CardContainer = styled.div`
  width: calc(1.2*12em);
  height: calc(1.2*15em);
  background-color: white;
  border-radius: 0.3em;
  box-shadow: 0 0 3px 0 #B8B8B8;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: 0.2s ease-in-out;
  z-index: 1;
  :hover{
    transform: scale(1.03)
  }
  @media screen and (max-width: 574px) {
    width: 45%;
  }
`

export const AddToBoxButton = styled(BaseButton)`
  width: 100%;
  flex-grow: 1;
  white-space: nowrap;
`

export const BuyADozenButton = styled(BaseButton)`
  width: 100%;
  flex-grow: 1;
  white-space: nowrap;
`

export const Label = styled.label`
  padding: 0em 0.5em;
  white-space: nowrap;
  @media screen and (max-width: 500px) {
    font-size: 3.5vw
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5em;
  padding: 0.5em;
  @media screen and (max-width: 574px) {
    flex-wrap: wrap;
  }
`
export const PriceContainer = styled.div`
  
`
export const Price = styled.label`
  padding: 0 0.3em 0 0.5em;
  font-size: 1.2rem;
  white-space: nowrap;
  @media screen and (max-width: 500px) {
    font-size: 4.5vw
  }
`
export const PriceLabel = styled.label`
  white-space: nowrap;
  @media screen and (max-width: 500px) {
    font-size: 3.5vw
  }
`