import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root{
    --background-color: #FAFAFA;
    --font-family: 'Inter', sans-serif;
    --checkOutWidth: 90%;
  }
  body{
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    user-select:none;
    background-color: var(--background-color);
    font-family: var(--font-family);
    overflow-x: hidden;
    ::-webkit-scrollbar{
      width: 10px;
    }
    ::-webkit-scrollbar-track{
      border-radius: 0.5em;
      background-color: #ECECEC;
    }
    ::-webkit-scrollbar-thumb{
      background-color: pink;
      border-radius: 0.5em;
    }
  }

  a{
    text-decoration: none;
  }
`