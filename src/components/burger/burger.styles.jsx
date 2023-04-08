import { ReactComponent as BurgerSVG } from '../../assets/burger.svg'
import styled from "styled-components";

export const BurgerContainer = styled.button`
  width: fit-content;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  display: flex;
`
export const BurgerSvg = styled(BurgerSVG)`
  width: 25px;
`