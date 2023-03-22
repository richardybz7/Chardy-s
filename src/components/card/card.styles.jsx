import styled from "styled-components";
import { BaseButton } from '../../components/button/button.styles'
export const CardContainer = styled.div`
  width: 12em;
  height: 15em;
  background-color: white;
  border-radius: 0.3em;
  box-shadow: 0 0 5px 0 #B8B8B8;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const AddToBoxButton = styled(BaseButton)`
  width: 100%;
  flex-grow: 1;
`

export const BuyADozenButton = styled(BaseButton)`
  width: 100%;
  flex-grow: 1;
`

export const Label = styled.label`
  padding: 0em 0.5em;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5em;
  padding: 0.5em;
`