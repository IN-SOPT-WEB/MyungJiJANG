import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    background-color: pink;
    font-family: 'Jua', sans-serif;
    
  }
`;

export default GlobalStyle;