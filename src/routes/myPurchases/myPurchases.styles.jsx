import styled from "styled-components";
import { BaseButton } from "../../components/button/button.styles";
import NoPurchaseSVG from '../../assets/noPurchaseAsset.svg'
import ToReceiveSVG from '../../assets/toReceiveAsset.svg'
import { motion } from "framer-motion";

export const ParentMyPurchasesContainer = styled(motion.div).attrs({
  initial:{opacity: 0},
  animate:{opacity: 1},
  exit:{opacity: 0}
})`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 0.85em;
  margin-top: 1em;
  justify-content: center;
`
export const MyPurchasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  align-items: center;
  @media screen and (max-width: 800px){
    width: 100%;
  }
`
export const SearchPurchasesContainer = styled.div`
  width: 90%;
  max-width: 436px;
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
export const MyPurchasesParentContainer = styled(motion.div).attrs({
  initial:{opacity: 0},
  animate:{opacity: 1},
  exit:{opacity: 0}
})`
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
  :active{
    background-color: #FF5938;
  }
  @media screen and (min-width: 430px){
    :hover{
      background-color: #FF5938;
    }
  }
`
export const TotalPurchasePriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const TotalPurchasePrice = styled.label`
  padding: 0.5em;
`
export const NoPurchaseContainer = styled(motion.div).attrs({
  initial:{opacity: 0},
  animate:{opacity: 1},
  exit:{opacity: 0}
})`
  display: flex;
  justify-content: center;
`
export const NoPurchase = styled.div`
  background-image: url(${NoPurchaseSVG});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  width: 30vw;
  height: 30vw;
`
export const ToReceive = styled.div`
  background-image: url(${ToReceiveSVG});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  width: 60vw;
  height: 40vw;
`
