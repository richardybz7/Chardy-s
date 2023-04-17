import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export const ParentMenuContainer = styled.div`
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  background-color: var(--background-color);
  border: 1px solid gray;
`
export const HeaderContainer = styled.div`
  padding: 0.2em 0.5em;
  border-bottom: 1px solid gray;
  cursor: pointer;
  :hover{
    background-color: pink;
  }
`
export const HeaderContent = styled.div`
  cursor: pointer;
  display: flex;
  gap: 0.2em;
  align-items: center;
`
export const HeaderLabel = styled.label`
  cursor: pointer;
  font-size: 4vw;
`
export const BackIcon = styled(FontAwesomeIcon).attrs({
  icon: faAngleLeft
})`
  font-size: 4vw;
`
export const ParentContentContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const MenuItemLabel = styled(Link)`
  cursor: ${props => !props.address &&'pointer'};
  padding: ${props => props.address ? '0.2em 0': '0.2em 0.5em'};
  text-decoration: none;
  color: black;
  font-size: 4vw;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  transition: 0.1s ease-in-out;
  :hover{
    background-color: pink;
  }
`
export const LinkAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid gray;
`
export const AddressContainer = styled.div`
  padding: 0 0.5em;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  :hover{
    background-color: pink;
  }
`