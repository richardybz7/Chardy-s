import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root{
    --background-color: #FAFAFA;
  }
  body{
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    background-color: var(--background-color);
    font-family: 'Noto Sans', sans-serif;
  }

  a{
    text-decoration: none;
  }
`