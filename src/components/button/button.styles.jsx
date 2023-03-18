import styled from "styled-components";

export const BaseButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  border-radius: 0.4em;
  border: none;
`
BaseButton.defaultProps = {
  type: "button"
}