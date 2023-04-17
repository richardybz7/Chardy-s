import styled from "styled-components";

export const FooterParentContainer = styled.div`
  display: flex;
  justify-content: center;
  //temporary
  background-color: #CBADAD;
  height: max-content;
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  flex-wrap: wrap;
  padding: 1em;
`

export const RightFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const LeftFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  color: white;
  padding-bottom: ${prop => prop.top === 'true' && '0.5em'};
  margin-bottom: ${prop => prop.top === 'true' && '0.5em'};
  border-bottom: ${prop => prop.top === 'true' && '1px solid white'};
`