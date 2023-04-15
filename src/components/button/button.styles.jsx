import styled from "styled-components";

export const BaseButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8em;
  border-radius: 0.4em;
  border: none;
  font-size: 0.8rem;
  font-family: var(--font-family);
  background-color: #F2F2F2;
  outline: none;
  -webkit-tap-highlight-color: transparent;
`
BaseButton.defaultProps = {
  type: "button"
}