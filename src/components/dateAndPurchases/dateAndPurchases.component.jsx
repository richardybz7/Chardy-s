import { Fragment, useEffect, useRef, useState } from "react"
import PurchaseDate from "../purchaseDate/purchaseDate.component"
import MyPurchasesItem from '../myPurchases-item/myPurchases-item.component'
import { isDisplayPurchase } from "../../store/purchases/purchases.action"
import { useDispatch, useSelector } from "react-redux"
import { selectIsDisplayPurchases } from "../../store/purchases/purchases.selector"

const DateAndPurchases = ({item}) => {
  const [toggledItems, setToggledItems] = useState([])
  const [toggle, setToggle] = useState(true)
  const itemRef = useRef([])
  //const displayPurchase = useSelector(selectIsDisplayPurchases)
  //const dispatch = useDispatch()
  const dateOnClickHandler = () => {
    //dispatch(isDisplayPurchase(!displayPurchase))
    const itemsToToggle = [...toggledItems]
    itemsToToggle.push(item.id)
    setToggledItems(itemsToToggle)
    setToggle(!toggle)
  }
  useEffect(() => {
    console.log('ITEM REF: ',itemRef.current)
  },[])
  return (
    <Fragment>
      {
        item.purchaseDate && <PurchaseDate key={item.id} date={item.purchaseDate} click={dateOnClickHandler} toggle={toggle}/>
      }
      {
        (!item.purchaseDate || toggledItems.includes(item.id)) && <MyPurchasesItem key={item.id} item={item} ref={el => itemRef.current[item.id] = el}/>
      }
    </Fragment>
  )
}
export default DateAndPurchases