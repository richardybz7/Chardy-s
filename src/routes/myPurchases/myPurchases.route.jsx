import { useSelector } from "react-redux";
import Search from "../../components/searchbox/searchbox.component";
import { ClearHistoryButton, ClearHistoryContainer, MyPurchasesContainer, MyPurchasesParentContainer, ParentMyPurchasesContainer, PurchaseItemsContainer, SearchPurchasesContainer, TabButton, TabButtonHighlighted, TabsButtonContainer, TabsButtonContentContainer, TabsContainer, TabsContentContainer, TabsParentContentContainer } from "./myPurchases.styles"
import { selectPurchases } from "../../store/purchases/purchases.selector";
import PurchaseDate from "../../components/purchaseDate/purchaseDate.component";
import MyPurchasesItem from "../../components/myPurchases-item/myPurchases-item.component";
import { useEffect, useRef, useState } from "react";
import PRODUCTS_DATA from "../../data";

const MyPurchases = () => {
  const purchases = useSelector(selectPurchases)
  const [purchasesButtonClick, setPurchasesButtonClick] = useState(false)
  const [toReceiveButtonClick, setToReceiveButtonClick] = useState(false)
  const purchaseButtonRef = useRef(null)
  const purchaseItemContainerRef = useRef([])
  const dateContainerRef = useRef([])
  const purchaseDateOnClickHandler = (purchaseIndex) => {
    console.log('hello?', purchaseItemContainerRef.current[purchaseIndex].attributes)
    if(purchaseItemContainerRef.current[purchaseIndex].hasAttribute('open')){
      console.log('skrrr')
      purchaseItemContainerRef.current[purchaseIndex].removeAttribute('open')
      purchaseItemContainerRef.current[purchaseIndex].style.display = 'none'
    }
    else{
      console.log('luhhh')
      purchaseItemContainerRef.current[purchaseIndex].setAttribute('open','')
      purchaseItemContainerRef.current[purchaseIndex].style.display = 'block'
    } 
  }
  const myPurchaseButtonHandler = () => {
    setPurchasesButtonClick(true)
    setToReceiveButtonClick(false)
  }
  const toReceiveButtonHandler = () => {
    setToReceiveButtonClick(true)
    setPurchasesButtonClick(false)
  }
  useEffect(() => {
    purchaseButtonRef.current.click()
  },[])
  return (
    <ParentMyPurchasesContainer>
      <MyPurchasesContainer>
        <SearchPurchasesContainer>
          <Search placeholder='Search purchases'/>
        </SearchPurchasesContainer>
        <TabsContainer>
          <TabsButtonContainer>
            <TabsButtonContentContainer>
              {
                !purchasesButtonClick ? <TabButton ref={purchaseButtonRef} onClick={() => myPurchaseButtonHandler()}>My purchases</TabButton>
                : <TabButtonHighlighted>My purchases</TabButtonHighlighted>
              }
              {
                !toReceiveButtonClick ? <TabButton onClick={() => toReceiveButtonHandler()}>To receive</TabButton>
                : <TabButtonHighlighted>To receive</TabButtonHighlighted>
              }
            </TabsButtonContentContainer>
          </TabsButtonContainer>
          <TabsParentContentContainer>
            <TabsContentContainer>
            {
              purchasesButtonClick ? (
                purchases.length && 
                purchases.map((purchase, purchaseIndex) => {
                    return(
                      <MyPurchasesParentContainer key={purchaseIndex}>
                        {
                          Object.values(purchase).map((item, i) => {
                            return (
                              item.purchaseDate && <PurchaseDate key={i} ref={el=>dateContainerRef.current[purchaseIndex] = el} date={item.purchaseDate} click={()=>purchaseDateOnClickHandler(purchaseIndex)}/> 
                            )
                          })
                        }
                        <PurchaseItemsContainer open key={purchaseIndex} ref={el=>purchaseItemContainerRef.current[purchaseIndex] = el}>
                        {
                          Object.values(purchase).map((item, i) => {
                            return (
                              !item.purchaseDate && <MyPurchasesItem key={i} item={item}/>
                            )
                          })
                        }
                        </PurchaseItemsContainer>
                      </MyPurchasesParentContainer>
                    )
                  }
                )
              ):(
                <div>
                  <h1>wa pay to receive, sarreyh</h1>
                </div>
              )
              
            }
            </TabsContentContainer>
          </TabsParentContentContainer>
        </TabsContainer>
        <ClearHistoryContainer>
          <ClearHistoryButton>Clear purchase history</ClearHistoryButton>
        </ClearHistoryContainer>
      </MyPurchasesContainer>
    </ParentMyPurchasesContainer>
  )
}

export default MyPurchases;