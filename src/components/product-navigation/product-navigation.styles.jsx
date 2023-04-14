import styled from "styled-components"

export const ProductNavigationContainer = styled.div`
  display: flex;
  font-size: 0.8em;
  gap: 2vw;
  padding-right: 1.5em;
  padding-left: 0.7em;
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