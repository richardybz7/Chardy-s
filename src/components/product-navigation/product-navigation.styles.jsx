import styled from "styled-components"

export const ProductNavigationContainer = styled.div`
  display: flex;
  font-size: 0.8em;
  gap: 2vw;
  padding-right: 1.5em;
  padding-left: 0.7em;
  align-items: center;
`
export const CategoryLabel = styled.label`
  cursor: pointer;
  color: #FF6161;
  :active{
    color: darkviolet;
  }
  @media screen and (min-width: 430px){
    :hover{
      color: darkviolet;
    }
  }
`
export const LabelDivision = styled.div`
  :not(:last-child){
    height: 5px;
    width: 5px;
    border-radius: 0.3em;
    background-color: #FF8F8F;
  }
`