import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  html,
  body,
  #root {
    /* margin: 0; */
    height: 100%;
    /* font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    box-sizing: border-box;
    background-color: #F4F6F9;
    color: #152946;
    margin: 0;
  };

  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
  };
`;

export { GlobalStyle };
