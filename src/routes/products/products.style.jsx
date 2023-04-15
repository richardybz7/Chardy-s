import styled from "styled-components";
import { BaseButton } from "../../components/button/button.styles";

export const ProductsParentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
`
export const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ReferenceContainer = styled.div``
export const BackToTopButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 1px solid pink;
  color: #FF8F8F;
  background-color: white;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  transition: 0.1s ease-in-out;
  :active{
    background-color: pink;
    color: white;
    border: 1px solid white;
  }
  @media screen and (min-width: 430px){
    :hover{
      background-color: pink;
      color: white;
      border: 1px solid white;
    }
  }
`
