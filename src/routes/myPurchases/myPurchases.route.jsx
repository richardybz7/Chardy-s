import { useDispatch, useSelector } from "react-redux";
import { ClearHistoryButton, ClearHistoryContainer, DateContainer, MyPurchasesContainer, MyPurchasesParentContainer, NoPurchase, NoPurchaseContainer, ParentMyPurchasesContainer, PurchaseItemsContainer, TabButton, TabButtonHighlighted, TabsButtonContainer, TabsButtonContentContainer, TabsContainer, TabsContentContainer, TabsParentContentContainer, ToReceive, TotalPurchasePrice, TotalPurchasePriceContainer } from "./myPurchases.styles"
import { selectNotificationCount, selectPurchases } from "../../store/purchases/purchases.selector";
import PurchaseDate from "../../components/purchaseDate/purchaseDate.component";
import MyPurchasesItem from "../../components/myPurchases-item/myPurchases-item.component";
import { useEffect, useRef, useState } from "react";
import PRODUCTS_DATA from "../../data";
import { removeAllUserPurchases, udpateUserPurchases, updateUserPurchaseNotification } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../store/user/user.selector";
import { setPurchases, setPurchasesNotificationToZero } from "../../store/purchases/purchases.action";
import { setBurgerIsOpen } from "../../store/burger/burger.action";
import { selectIsOpenBurger } from "../../store/burger/burger.selector";

const MyPurchases = () => {
  const dispatch = useDispatch()
  const isBurgerOpen = useSelector(selectIsOpenBurger)
  const currentUser = useSelector(selectCurrentUser)
  const purchases = useSelector(selectPurchases)
  const notificationCount = useSelector(selectNotificationCount)
  const [purchasesButtonClick, setPurchasesButtonClick] = useState(false)
  const [toReceiveButtonClick, setToReceiveButtonClick] = useState(false)
  const purchaseButtonRef = useRef(null)
  const purchaseItemContainerRef = useRef([])
  const dateContainerRef = useRef([])
  const purchaseDateOnClickHandler = (purchaseIndex) => {
    if(purchaseItemContainerRef.current[purchaseIndex].hasAttribute('open')){
      purchaseItemContainerRef.current[purchaseIndex].removeAttribute('open')
      purchaseItemContainerRef.current[purchaseIndex].style.display = 'none'
    }
    else{
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
  const clearPurchaseHistoryHandler = () => {
    if(window.confirm("Cleared purchase history will not be recovered. Continue?")){
      removeAllUserPurchases(currentUser)
      dispatch(setPurchases([]))
    }
  }
  useEffect(() => {
    isBurgerOpen && dispatch(setBurgerIsOpen(false))
    purchaseButtonRef.current && purchaseButtonRef.current.click()
    if(notificationCount > 0){
      updateUserPurchaseNotification(currentUser, purchases)
      dispatch(setPurchasesNotificationToZero())
    }
  },[])
  return (
    <ParentMyPurchasesContainer>
      <MyPurchasesContainer>
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
                purchases.length > 0 ? (
                  purchases.map((purchase, purchaseIndex) => {
                    let total = 0
                    return(
                      <MyPurchasesParentContainer key={purchaseIndex}>
                        {
                          Object.values(purchase).map((item, i) => 
                            item.purchaseDate && 
                              <DateContainer key={i} ref={el=>dateContainerRef.current[purchaseIndex] = el} >
                                <PurchaseDate date={item.purchaseDate} click={()=>purchaseDateOnClickHandler(purchaseIndex)}/> 
                              </DateContainer>
                          )
                        }
                        <PurchaseItemsContainer open key={purchaseIndex} ref={el=>purchaseItemContainerRef.current[purchaseIndex] = el}>
                          {
                            Object.values(purchase).map((purchaseItemsObj) => 
                              purchaseItemsObj.items && Object.values(purchaseItemsObj).map((item) => 
                                Object.values(item).map((itemProps, i) => {
                                  total += (itemProps.count * itemProps.itemPrice) + (itemProps.dozenCount * itemProps.dozenPrice)
                                  return <MyPurchasesItem key={i} item={itemProps}/>
                                })
                              )
                            )
                          }
                          {
                            <TotalPurchasePriceContainer>
                              <TotalPurchasePrice>
                                Total purchase price: P{total}
                              </TotalPurchasePrice>
                            </TotalPurchasePriceContainer>
                          }
                        </PurchaseItemsContainer>
                      </MyPurchasesParentContainer>
                    )
                  })
                ):(
                  <NoPurchaseContainer>
                    <NoPurchase/>
                  </NoPurchaseContainer>
                ) 
                  
              ):(
                <NoPurchaseContainer>
                  <ToReceive/>
                </NoPurchaseContainer>
              )
              
            }
            </TabsContentContainer>
          </TabsParentContentContainer>
        </TabsContainer>
        <ClearHistoryContainer>
          <ClearHistoryButton onClick={() => clearPurchaseHistoryHandler()}>Clear purchase history</ClearHistoryButton>
        </ClearHistoryContainer>
      </MyPurchasesContainer>
    </ParentMyPurchasesContainer>
  )
}

export default MyPurchases;