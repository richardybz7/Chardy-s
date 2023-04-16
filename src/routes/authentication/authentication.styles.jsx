import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5rem;
  gap: 5em;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 1000px;

  @media all and (max-width: 1060px){
    flex-direction: column;
    flex-wrap: wrap;
    gap: 3em;
  }

  @media all and (max-width: 660px){
    padding: 0.2rem;
  }
`
