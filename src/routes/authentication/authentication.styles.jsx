import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  &:before, &:after{
    content:'';
  }
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 10fr 1fr;
`
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5rem;
  gap: 5em;

  @media all and (max-width: 1060px){
    flex-direction: column;
    flex-wrap: wrap;
    gap: 3em;
  }

  @media all and (max-width: 660px){
    padding: 0.2rem;
  }
`
