import styled from "styled-components"
import { Link } from "react-router-dom"

export const LogoContainer = styled(Link)`
  cursor: ${props => props.cursor};
  display: flex;
  align-items: center;
  width: 7.5rem;
  -webkit-tap-highlight-color: transparent;
  outline: none;
`