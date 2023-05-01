import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root{
    --background-color: #FAFAFA;
    --font-family: 'Inter', sans-serif;
    --font-family2: 'Pacifico', cursive;
    --checkOutWidth: 90%;
    --card-radius: 2em;
    --color1: #D4145A;
    --color2: #FB3371;
    --color3: #FF437B;
    --color4: #33FBBD;
    --color5: #FF5938;
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