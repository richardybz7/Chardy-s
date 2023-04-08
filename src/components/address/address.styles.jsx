import styled from "styled-components";
import { BaseButton } from "../button/button.styles";

export const DeliveryAddressContainer = styled.div`
  display: flex;
  border: 1px solid gray;
`
export const DeliveryInputArea = styled.textarea`
  width: 100%;
  border: none;
  border-right: none;
  border-top-left-radius: 0.3em;
  border-bottom-left-radius: 0.3em;
  min-height: 100px;
  font-family: var(--font-family);
`
export const EditSaveAddressButton = styled(BaseButton)`
  border-radius: 0;
`