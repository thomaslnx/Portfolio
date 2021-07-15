import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-background-color: #141516;
  }

  *, html, body, #__next {
    margin: 0;
    padding: 0;
    outline: 0;
    font-smooth: anti-aliased;
  }

  body {
    background-color: var(--primary-background-color);
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
