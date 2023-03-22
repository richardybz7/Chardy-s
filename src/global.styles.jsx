import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root{
    --background-color: #FAFAFA;
    --font-family: 'Inter', sans-serif;
  }
  body{
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    background-color: var(--background-color);
    font-family: var(--font-family);
  }

  a{
    text-decoration: none;
  }
`