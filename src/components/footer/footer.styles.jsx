import styled from "styled-components";
export const FooterParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //temporary
  background: linear-gradient(var(--color1) 50%, var(--color3));
  height: 15em;
  position: relative;
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  padding: 1em;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: unset;
  }
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
  z-index: 2;
  color: white;
  padding-bottom: ${prop => prop.top === 'true' && '0.5em'};
  margin-bottom: ${prop => prop.top === 'true' && '0.5em'};
  border-bottom: ${prop => prop.top === 'true' && '1px solid white'};
`