import styled from "styled-components";

export const ItemPurchaseDateContainer = styled.div`
  cursor: pointer;
  padding: 0.5em;
  background-color: var(--color2);
  color: white;
  display: flex;
  justify-content: space-between;
  transition: 0.15s ease-in-out;
  :active{
    background-color: var(--color4);
    color: #3E6D6D;
  }
  @media screen and (min-width: 430px){
    :hover{
      background-color: var(--color4);
      color: black;
    }
  }
`
export const PurchaseDateElements = styled.div`
`