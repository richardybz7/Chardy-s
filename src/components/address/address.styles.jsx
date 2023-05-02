import styled from "styled-components";
import { BaseButton } from "../button/button.styles";

export const DeliveryAddressContainer = styled.div`
  display: flex;
  border: 3px solid var(--color1);
  border-radius: 1em;
  overflow: hidden;
  padding-left: 0.5em;
`
export const DeliveryInputArea = styled.textarea`
  width: 100%;
  border: none;
  border-right: none;
  border-top-left-radius: 0.3em;
  border-bottom-left-radius: 0.3em;
  min-height: 100px;
  min-width: 200px;
  font-family: var(--font-family);
`
export const EditSaveAddressButton = styled(BaseButton)`
  border-radius: 0;
  color: white;
  background-color: var(--color2);
  transition: 0.2s ease-in-out;
  :hover{
    background-color: var(--color4);
    color: black;
  }
`