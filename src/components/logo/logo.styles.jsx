import styled from "styled-components"
import { Link } from "react-router-dom"
import LogoSVG from '../../assets/logo.svg'

export const LogoContainer = styled(Link)`
  cursor: ${props => props.cursor};
  display: flex;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
  outline: none;
`

export const ChardyLogo = styled.div`
  background-image: url(${LogoSVG});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100px;
  width: 200px;
  @media screen and (max-width: 670px) {
    height: 70px;
    width: 150px;
  }
`