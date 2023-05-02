import styled from "styled-components"

export const ProductNavigationContainer = styled.div`
  display: flex;
  padding-right: 1.5em;
  padding-left: 0.7em;
  align-items: center;
  @media screen and (max-width: 470px) {
    gap: 3.5vw;
  }
`
export const CategoryLabel = styled.label`
  cursor: pointer;
  font-weight: bold;
  color: var(--color1);
  white-space: nowrap;
  :active{
    color: darkviolet;
  }
  @media screen and (max-width: 470px) {
    font-size: 3.4vw;
  }
  @media screen and (min-width: 430px){
    :hover{
      color: darkviolet;
    }
  }
`
export const LabelDivision = styled.div`
  margin: 0 1em;
  :not(:last-child){
    height: 5px;
    width: 5px;
    border-radius: 0.3em;
    background-color: var(--color1);
  }
  @media screen and (max-width: 470px) {
    margin: 0;
  }
`