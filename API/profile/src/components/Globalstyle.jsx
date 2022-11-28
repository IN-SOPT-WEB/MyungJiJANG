import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    @font-face {
    font-family: "HBIOS-SYS";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/HBIOS-SYS.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
    font-family: "HBIOS-SYS";
    display: flex;
    justify-content: center;
    background-color: #060f3e;
    
  }
`;

export default GlobalStyle;