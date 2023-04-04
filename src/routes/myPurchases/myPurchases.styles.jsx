import styled from "styled-components";
import { BaseButton } from "../../components/button/button.styles";

export const ParentMyPurchasesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 0.85em;
`
export const MyPurchasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--checkOutWidth);
`
export const SearchPurchasesContainer = styled.div`
  width: 50%;
  padding: 1em 0;
`
export const TabsContainer = styled.div`
  width: var(--checkOutWidth);
`
export const TabsButtonContainer = styled.div`
  display: flex;
`
export const TabsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 1em;
  border-top-right-radius: 0.3em;
  border-bottom-right-radius: 0.3em;
  border-bottom-left-radius: 0.3em;
`
export const TabButton = styled(BaseButton)`
  border: 1px solid black;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom: 1px solid transparent;
  position: relative;
  top: 1px;
  :not(:focus),:active{
    border: 1px solid transparent;
    border-bottom: 1px solid black;
  }
`