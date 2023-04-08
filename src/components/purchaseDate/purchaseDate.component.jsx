import { ItemPurchaseDateContainer, PurchaseDateElements } from "./purchaseDate.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

const PurchaseDate = ({date, click}) => {
  const fullDate = new Date(date).toString()
  
  return (
    <ItemPurchaseDateContainer onClick={click}>
      <PurchaseDateElements>{fullDate}</PurchaseDateElements>
      <PurchaseDateElements>
        <FontAwesomeIcon icon={faChevronDown}/>
      </PurchaseDateElements>
    </ItemPurchaseDateContainer>
  )
}

export default PurchaseDate