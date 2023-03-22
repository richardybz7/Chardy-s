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
`
BaseButton.defaultProps = {
  type: "button"
}