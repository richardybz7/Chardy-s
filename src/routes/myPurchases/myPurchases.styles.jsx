import styled from "styled-components";
import { BaseButton } from "../../components/button/button.styles";

export const ParentMyPurchasesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  font-size: 0.85em;
`
export const MyPurchasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--checkOutWidth);
  align-items: center;
`
export const SearchPurchasesContainer = styled.div`
  width: 100%;
  padding: 1em 0;
  display: flex;
  justify-content: center;
`
export const TabsContainer = styled.div`
  width: var(--checkOutWidth);
`
export const TabsButtonContainer = styled.div`
  display: flex;
`
export const TabsButtonContentContainer = styled.div`
  display: flex;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  overflow: hidden;
`
export const TabsParentContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid #FF7E7E;
  box-sizing: border-box;
  padding: 0.5em;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
`
export const TabsContentContainer = styled.div`
  border-radius: 0.35em;
  overflow: hidden;
`
export const TabButton = styled(BaseButton)`
  border-radius: 0;
  border-bottom: 1px solid transparent;
  position: relative;
  color: #FF7E7E;
  font-family: var(--font-family);
  background-color: #F3F3F3;
  transition: 0.15s ease-in-out;
  :hover{
    background-color: pink;
    color: white;
  }
`
export const TabButtonHighlighted = styled(BaseButton)`
  border-radius: 0;
  background-color: #FF7E7E;
  color: white;
`
export const MyPurchasesParentContainer = styled.div`
`
export const DateContainer = styled.div`
`
export const PurchaseItemsContainer = styled.div`
`
export const ClearHistoryContainer = styled.div`
  width: var(--checkOutWidth);
  padding: 1.5em 0;
  display: flex;
  justify-content: flex-end;
`
export const ClearHistoryButton = styled(BaseButton)`
  color: white;
  font-family: var(--font-family);
  background-color: #FF7E7E;
  transition: 0.15s ease-in-out;
  :hover{
    background-color: pink;
    color: #3E6D6D;
  }
`
export const TotalPurchasePriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const TotalPurchasePrice = styled.label`
  padding: 0.5em;
`