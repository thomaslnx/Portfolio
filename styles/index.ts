import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  /* ---------------------------------------------------------
  ** ## colors
  * ---------------------------------------------------------*/
  :root {
    --primary-background-color: #141516;

    /* shades
     * generated using
     * Tint & Shade Generator
     * (https://maketintsandshades.com/)
     */
    --color-black   : #000000;
    --color-gray-19 : #020202;
    --color-gray-18 : #040404;
    --color-gray-17 : #060607;
    --color-gray-16 : #080809;
    --color-gray-15 : #0a0b0b;
    --color-gray-14 : #0c0d0d;
    --color-gray-13 : #0e0f0f;
    --color-gray-12 : #101112;
    --color-gray-11 : #121314;
    --color-gray-10 : #141516;
    --color-gray-9  : #2c2c2d;
    --color-gray-8  : #434445;
    --color-gray-7  : #5b5b5c;
    --color-gray-6  : #727373;
    --color-gray-5  : #8a8a8b;
    --color-gray-4  : #a1a1a2;
    --color-gray-3  : #b9b9b9;
    --color-gray-2  : #d0d0d0;
    --color-gray-1  : #e8e8e8;
    --color-white   : #ffffff;

    // preloader-colors
    --color-preloader-b : var(--color-gray-10);
    --color-loader      : var(--color-white);
    --color-loader-light: rgba(255,255,255, 0.1);
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
